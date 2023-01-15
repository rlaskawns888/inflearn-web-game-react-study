const path = require('path');

module.exports = {
    name: 'word-relay-setting', //webpack 설정의 이름
    mode: 'development', //실서비스 production
    devtool: 'eval', //빠르게
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    //webpack에서 entry, output이 제일 중요함.
    entry: {
        // app: ['./client.jsx'],
        app: ['./client.jsx'],
    },//입력
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
    }//출력
};