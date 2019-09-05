项目跑起来执行 
npm install
npm run dev


cross-env用来设置环境变量
Node环境中的环境变量为NODE_ENV，用process.env.NODE_ENV访问该变量  指定不同的环境变量

# webpack-dev-server专门用在开发环境，一个Node.js服务器
# webpack-dev-server提供了一个服务器和实时重载（live reloading）功能
# webpack-dev-server是一个小型的node.js Express服务器,它使用webpack-dev-middleware中间件来为通过webpack打包生成的资源文件提供Web服务

# html-webpack-plugin插件可以生成一个HTML5文件，它可以动态添加script标签加载webpack生成包

package.json 称为 npm script脚本

 # 在webpack.config.js文件中读取npm script脚本命令携带的环境变量，脚本命令中设置的环境变量
 都会存在process.env这个对象里面，因此我们可以通过这个对象拿到我们设置的所有环境变量，
 然后进行判断来处理不同环境下的配置信息

 # sourcemap是为了解决开发代码与实际运行代码不一致时帮助我们debug到原始开发代码的技术

 # 运行npm run build 来编译生成生产模式下的bundles
 运行npm run dev来生成开发模式下的bundles以及启动本地server
