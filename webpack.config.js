const path = require('path');// 引入操作路径模块
const vueLoaderPlugin  = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV == 'development';

const config = {
    target:'web',//因为我们开发的是前端的项目，我们跑在浏览器里面的，所以我们webpack的编译目标是web平台
    entry:'./src/index.js',//指定入口文件
    output: {
        //必须是绝对路径（所以这里用到的是path.resolve，而不是path.join）
        //__dirname就代表这个文件所在的目录地址，path.resolve()的意思就是和后面对的字符串路径拼接起来，形成一个绝对的路径
        //指定文件打包的输入目录
        path:path.resolve(__dirname,'dist'),
        filename: "bundle.js" // 指定输出文件的名称
    },
    module: {
        rules: [
            {
                test:/\.vue$/, //解析vue后缀文件
                loader:'vue-loader'
            }
        ]
    },
    //定义全局插件，不需要require()引入，直接可以使用模块名
    plugins: [
        //webpack在编译过程中以及页面上去判断环境
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:isDev?'"development"':'"production"'
            }
        }),
        //它负责克隆您定义的任何其他规则并将它们应用于.vue文件中的相应语言块
        new vueLoaderPlugin(),
        // 依据一个简单的模板，帮你生成最终的Html5文件
        // 这个文件中自动引用了你打包后的JS文件。
        // 每次编译都在文件名中插入一个不同的哈希值
        new htmlWebpackPlugin()
    ]
};

if(isDev){
    //选择一种source map来增强调试过程，该选项会影响构建和重构建的速度
    config.devtool = '#cheap-module-eval-source-map';
    //webpack-dev-server配置
    config.devServer = {
        port:8000,
        host:'localhost', // 设置值：0.0.0.0的好处，可以通过localhost访问，也可以通过127.0.0.1访问，还可以通过本机的ip进行访问
        open:true //在启动webpack-dev-server的时候自动帮我们打开浏览器
    }
}

module.exports = config;