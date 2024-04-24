// 中间件层

import Application from "koa";

import addHandleError from './handleError';
import addNegotiation from './negotiation';


export default class MyMiddleware {


    static initMyMiddleWare(app: Application) {

        addNegotiation(app);
        addHandleError(app);
    }
}