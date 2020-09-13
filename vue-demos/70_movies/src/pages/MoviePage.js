//根组件, 整个页面的内容靠该组件完成
import MovieList from "../components/MovieList.js";
import Pager from "../components/Pager.js";
import movieService from "../services/movieService.js";
import Loading from "../components/Loading.js";

const template = `
  <div>
    <MovieList :movies="movies"/>

    <Pager
      :value="current"
      @input="handlePageChange"
      :total="total" 
      :page-size="pageSize"/>

    <Loading :show="isLoading" />
  </div>
 
`

export default{
  template,
  data() {
    return {
      current: 1,
      total:0,
      pageSize: 3,
      movies:[],
      isLoading: false //是否正在远程获取数据

    }
  },
  mounted(){
    this.setMovies();
  },
  components: {
    MovieList,
    Pager,
    Loading
  },
  methods: {
 
    //按照当前的页码和页容量, 重新设置电影和电影数据
    setMovies(){
      this.isLoading = true; 
      //远程获取数据
      movieService.getPageMovies(this.current, this.pageSize).then(resp => {
        this.total = resp.total;
        this.movies = resp.datas;
        this.isLoading = false;
      });
    },

    handlePageChange(newPage) {
      this.current = newPage;

      this.setMovies();
    }
    
  },
}