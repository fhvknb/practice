import { appendFile } from "fs";
import Application, { Context, Next } from "koa";

export default function addHandleError(app: Application) {
    
    async function handleError(ctx: Context, next: Next) {
        try {

            await next();

        } catch (err) {
            ctx.response.status = err.status || 500;
            // await Log.error(ctx, err);
            if (app.env == 'production') delete err.stack; // don't leak sensitive info!
            switch (ctx.response.status) {
                case 204: // No Content
                    break;
                case 401: // Unauthorized
                    ctx.response.set('WWW-Authenticate', 'Basic');
                    break;
                case 403: // Forbidden
                case 404: // Not Found
                case 406: // Not Acceptable
                case 409: // Conflict
                    ctx.response.body = { message: err.message, root: 'error' };
                    break;
                default:
                case 500: // Internal Server Error (for uncaught or programming errors)
                    ctx.response.body = { message: err.message, stack: err.stack, root: 'error' };
                    // ctx.app.emit('error', err, ctx); // github.com/koajs/koa/wiki/Error-Handling
                    break;
            }
        }
    }
    app.use(handleError);
}