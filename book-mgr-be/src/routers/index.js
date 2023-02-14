const auth = require('./auth/index');

module.exports = (app) => {
    app.use(auth.routes());
    // app.use(inviteCode.routes());
    // app.use(book.routes());
};