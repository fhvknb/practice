"use strict";
// import { Context } from "koa";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
app.use(views(path.join(__dirname, 'views'), { extension: 'ejs' }));
const middlewares_1 = __importDefault(require("./middlewares"));
middlewares_1.default.initMyMiddleWare(app);
const controllers_1 = __importDefault(require("./controllers"));
controllers_1.default.initRouter(app); // 初始化路由
module.exports = app;
