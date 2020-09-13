import Home from "./pages/index.js";
import Movies from "./pages/MoviePage.js";
import MovieDetail from "./pages/MovieDetail.js";
import Login from "./pages/Login.js";

//路由配置
const router = new VueRouter({
  routes: [
    { path:"/", component: Home },
    { path:"/movies", component: Movies },
    { path:"/moviedetail/:id", name:"MovieDetail", component: MovieDetail},
    { path: "/login", component: Login }
  ],
  mode: 'hash'
})

export default router