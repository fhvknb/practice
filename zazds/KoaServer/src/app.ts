// import { Context } from "koa";

const path = require('path');
const Koa = require('koa');
const serve = require('koa-static');
const views = require('koa-views');
// const xmlParser = require('koa-xml-body');
const bodyParser = require('koa-bodyparser');
const formdataParser = require('koa-formdataparse');

const app = new Koa();

// app.use(xmlParser());


app.use(formdataParser());

app.use(bodyParser({
    enableTypes: ['json', 'form', 'text', 'xml']
}));



const maxage = app.env == 'production' ? 1000 * 60 * 60 * 24 : 1000;
app.use(serve('public', { maxage: maxage }));

// console.log(path.join(__dirname, 'views'));
app.use(views(path.join(__dirname, 'views'), { extension: 'ejs' }))

import MyMiddleware from './middlewares';
MyMiddleware.initMyMiddleWare(app);

import  Controller from './controllers';

Controller.initRouter(app); // 初始化路由


module.exports = app;

