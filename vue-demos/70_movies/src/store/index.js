import loginService from "../services/loginService.js";

const store = new Vuex.Store({
  state: {
    loginUser:{
      data: null, //当前登录的用户为空
      isLoging: false //当前正在登录
    },
    movies: {

    }
  },
  mutations:{
    //配置状态有哪些变化, 每一个变化是一个函数

    //用于改变是否正在登录的状态
    setIsLoging(state, payload){
      //参数state: 表示当前的状态
      //payload: 可选的, 该参数表示额外的信息
      state.loginUser.isLoging = payload;
    },
    setUser(state, userObj){
      state.loginUser.data = userObj;
    }
  },
  actions:{
    //配置副作用操作, 每个action是一个函数
    async loginAction(context, payload){
      //需要传入账号和密码 {loginId:xx, loginPwd:xx}   
      context.commit("setIsLoging", true);

      // loginService.login(payload.loginId, payload.loginPwd).then(resp => {
      //   if(resp) {
      //     //登录成功
      //     context.commit("setUser", resp);
      //     //额外的操作, 保存用户信息到localStorage
      //     localStorage.setItem("loginUser", JSON.stringify(resp)); 
      //   }else{
      //     //登录失败

      //   }
      //   context.commit("setIsLoging", false)
      // })
      
      //为了获知登录是否成功, 需要返回值
      const resp = await loginService.login(payload.loginId, payload.loginPwd);
      if(resp){
        //登录成功
        context.commit("setUser", resp);
        //额外的操作, 保存用户信息到localStorage
        localStorage.setItem("loginUser", JSON.stringify(resp)); 
        return true;
      }
      context.commit("setIsLoging", false);
      return false;
    },
    logoutAction(context){
      //退出登录
      context.commit("setUser", null);
      localStorage.removeItem("loginUser");
    },
    //刷新页面后,内存中的数据会清除. 需要同步本地数据(localStorage), 就是把本地数据同步到内存
    //使得 刷新页面后的数据没有丢失 
    syncLocal(context) {
      //初始化时, 同步本地存储
      const local = localStorage.getItem("loginUser");
      if(local){
        //已经登录
        const user = JSON.parse(local); //拿出本地存储中的用户对象
        context.commit("setUser", user);//同步到状态
      }
    }
  },
  module: {

  }
});

export default store;