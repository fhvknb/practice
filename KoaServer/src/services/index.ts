// 服务层
import { Context, Next } from "koa";


export default class Index {
    static async index(ctx: Context, next: Next) {

        ctx.body = '/ Hello World'
    }


}