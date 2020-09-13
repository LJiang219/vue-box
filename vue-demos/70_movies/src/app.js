
import Header from "./components/Header.js";


//根组件, 整个页面的内容在其上完成

const template = `
  <div>
    <Header  />
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>  
  </div>
`

export default{
  template,
  components:{
    Header,
  },
  data() {
    return {
      
    }
  },
  methods: {
  
  },
}