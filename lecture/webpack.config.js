const path = require('path');

module.exports = {
    name: 'word-relay-setting', //webpack 설정의 이름
    mode: 'development', //실서비스 production
    devtool: 'eval', //빠르게
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    //webpack에서 entry, output이 제일 중요함.
    //입력받은것을 모듈을 적용하고 출력한다.
    entry: {
        // app: ['./client.jsx'],
        app: ['./client'],
    },//입력
    module: {
        rules: [{
            test: /\.jsx?/, //js, jsx 파일에 룰을 적용하겟다.
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env','@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties']
            },
        }],
    }, 
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
    }//출력
};