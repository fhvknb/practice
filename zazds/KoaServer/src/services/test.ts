import { Context, Next } from "koa";

const test = {
    word: 'This is a test word.'
};


export default class Test {
    static async test(ctx: Context, next: Next) {

        await ctx.render('test', { test });
    }

    static async test2(ctx: Context, next: Next) {
        ctx.flag = 'ziyi';
        next();
        await ctx.render('test', { test: { word: '哈哈哈哈'} });
    }
}
