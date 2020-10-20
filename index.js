const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const user = require('./api/user'); //경로를 생략하여도 index.js 파일을 자동으로 찾는다.

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//  /users 라는 모든 경로는 user 라우터를 사용
app.use('/users', user);


module.exports = app;
