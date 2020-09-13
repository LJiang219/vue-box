import App from "./app.js"
import router from "./router.js";
import store from "./store/index.js";

//仅负责启动vue和启动时的配置, 
//所有界面, 交给组件app来渲染
//这里的template就是使用了组件app(局部组件的使用, 在哪里使用, 就引入该组件)

//测试store
// console.log(store.state.loginUser.isLoging);
// store.commit('setIsLoging', true);
// console.log(store.state.loginUser.isLoging);

//在最开始要同步本地存储
//同步本地存储
store.dispatch("syncLocal");
//控制台输入查看 store.state.loginUser

//测试store
window.store = store;
//控制台输入:
// store; 查看store
// store.dispatch('loginAction', {loginId:"admin",loginPwd:"123123"})
// store.state 查看数据
// 查看localStorage



new Vue({
  template: `<App />`,
  components: {
    App
  },
  el:"#app",
  router,
  store
})


