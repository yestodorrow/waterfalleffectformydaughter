# mydaughter

> A Vue.js project


其实都是挺简单的东西，
但是被嘲笑不会用git 所以就命令行了一把

把我闺女一个月的时候的照片拿了出来

页面加载子组件时，使用axios请求本地json.txt文件，获取图片路径，
用v-for循环列表，将图片进行渲染，做了一个瀑布流



图片比较大   
做了一个优化，在3G或者更慢的网络情况下，显示给用户正在加载的图像，预加载三张图片

随着用户下滑，会加载后面的图片


适配了手机 1rem=屏幕宽度/10，用浏览器效果不佳，建议用谷歌自带的手机模拟俩看

然后标题做了一个轮播，这里用的是awesome-swiper不过这个现在都到4了


刚把下拉加载添加上，这个mint-ui有很多组件 其中infinite-scroll就不错，而且支持按需加载 

这样首页加载的时候，js文件不至于过大


下来做一下code spliting
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
