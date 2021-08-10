// 路由控制器

const Router = require('@koa/router');
const router = new Router();
import Application from 'koa';
// import { Context, Next } from 'koa';
import TestServer from '../services/test';
import IndexServer from '../services/index';
import ApiServer from '../services/api';
import * as routerHander from './routerHanders';



router.get('/test', TestServer.test);
router.get('/test2', TestServer.test2, routerHander.test2);

router.get('/', IndexServer.index);

router.get('/api/test', ApiServer.test);
router.post('/api/getHello', ApiServer.getHello);


// 初始化路由
export default class Controller {
   
    static initRouter(app: Application) {
        app.use(router.middleware());
    }
}


// export default router.middleware();