import Vue from 'vue'
import App from './app.vue'

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
    //el:'#app',  vue 2.0
    render:h =>h(App)
}).$mount(root);

//$mount()手动挂载  1.x使用方法

// render: x => x(App)

// 这里的render: x => x(App)是es6的写法

// 转换过来就是： 暂且可理解为是渲染App组件

// render:(function(x){

// return x(App);

// });