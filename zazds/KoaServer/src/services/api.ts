// 服务层
import { Context, Next } from "koa";


export default class Index {
    static async test(ctx: Context, next: Next) {
        ctx.body = {
            code: 0,
            data: 'Hello Ziyi'
        }
        // ctx.toJSON()
    }

    static async getHello(ctx: Context, next: Next) {
        const req:any = ctx.request;
        console.log( req.formData)
        console.log('///')
        ctx.body = req.formData;
        // ctx.body = {
        //     code: 0,
        //     data: {
        //         title: 'Good eveing!'
        //     }
        // }
    }


}