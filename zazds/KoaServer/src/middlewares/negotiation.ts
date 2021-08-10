import Application, { Context, Next, } from "koa";
import body from 'koa-body'; // body parser
import xmlify from 'xmlify';   // JS object to XML
import yaml from 'js-yaml';  // JS object to YAML
const convert = require('xml-js');


export default function addExtendResonse(app: Application) {
    // content negotiation: api will respond with json, xml, or yaml
    async function contentNegotiation(ctx: Context, next: Next) {
        await next();

        if (!ctx.response.body) return; // no content to return

        const _body: any = ctx.response.body;

        // check Accept header for preferred response type
        const type = ctx.request.accepts('json', 'xml', 'yaml', 'text');
        switch (type) {
            case 'json':
            default:
                delete _body.root; // xml root element
                break; // ... koa takes care of type
            case 'xml':
                ctx.response.type = type;
                const root = _body.root; // xml root element
                delete _body.root;
                ctx.response.body = xmlify(ctx.response.body, root);
                break;
            case 'yaml':
            case 'text':
                delete _body.root; // xml root element
                ctx.response.type = 'yaml';
                ctx.response.body = yaml.dump(ctx.response.body);
                break;
            case false:
                ctx.throw(406); // "Not acceptable" - can't furnish whatever was requested
                break;
        }
    }


    // app.use(contentNegotiation);
    // app.use(body({ multipart: true }));
    // add xml support
    // app.use((ctx, next )=> {
    //     console.log(ctx.request.body);

    //     ctx.request.body =convert.xml2js(ctx.request.body, {
    //         compact: true,
    //         spaces: 4
    //     })
    //     next();
    // });

}