
 import Loading from "../components/Loading.js";
 
 const template = `
  <div>
    <p>
      <label>账号: </label>
      <input type="text" v-model="loginId" />
    </p>
    <p>
      <label>密码:</label>
      <input type="password" v-model="loginPwd" />
    </p>
    <p>
      <button @click="handleLogin">登录</button>
    </p>

    <Loading :show="isLoging" /> 
  </div>
 `;

 export default{
   template,
   components: {
     Loading,
   },
   data() {
     return {
       loginId: "", //暂存数据
       loginPwd:""
     }
   },
  //  computed: {
  //    isLoading() {
  //      return this.$store.state.loginUser.isLoging
  //    }
  //  }, 
  computed: Vuex.mapState({
    isLoging: state => state.loginUser.isLoging
  }),
  methods: {
    async handleLogin() {
    const result = await this.$store.dispatch("loginAction", {
      loginId: this.loginId,
      loginPwd: this.loginPwd
    });
    if(result){
      this.$router.push("/"); //跳转到首页
    }else{
      alert("账号密码错误")
    }
    }
  },
 }