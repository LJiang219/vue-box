import app from "./app.js";

//仅负责启动vue和启动时的配置, 
//所有界面, 交给组件app来渲染
//这里的template就是使用了组件app(局部组件的使用, 在哪里使用, 就引入该组件)
new Vue({
  template: `<app />`,
  components: {
    app
  },
  el:"#app"
})


