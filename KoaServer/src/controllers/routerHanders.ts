import { Next } from "koa";
import { Context } from "koa";

export async function test2 (ctx: Context, next: Next) {
    console.log('flag');
    console.log('=======');
    console.log(ctx.flag);
}