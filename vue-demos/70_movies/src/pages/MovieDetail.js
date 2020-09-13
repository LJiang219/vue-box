import Movie from "../components/movie.js";
import movieService from "../services/movieService.js";
import Loading from "../components/Loading.js";

const template = `
  <div>
    <h2>电影详情</h2>
    <Movie :data="movie"/>
    <Loading :show="isLoading" />
  </div>
`

export default{
  name:"MovieDetail",
  components: {
    Movie,
    Loading
  },
  data() {
    return {
      movie: function(){
        return {}
      },
      isLoading: false, //是否正在远程获取
    }
  },
  mounted () {
    // console.log(this.$route)
    //获取id
    const id = this.$route.params.id;
    this.isLoading = true;
    //根据id获取电影数据
    movieService.getMovie(id).then(resp => {
      this.movie = resp;
      this.isLoading = false;
    })
    
  },
  template
}