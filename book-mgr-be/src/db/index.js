require('./Schemas/User');
require('./Schemas/InviteCode');
require('./Schemas/Book');

const mongoose = require('mongoose');

mongoose.set( "strictQuery", false );

const connect = () => {
    return new Promise((resolve) => {
        //去链接数据库
        mongoose.connect('mongodb://127.0.0.1:27017/book-mgr');
        // 当数据库被打开的时候  做的一些事情
        mongoose.connection.on('open', () => {
            console.log('连接数据库成功');

            resolve();
        });
    });
};


module.exports = {
    connect,
};