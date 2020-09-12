//根组件, 整个页面的内容靠该组件完成
import MovieList from "./MovieList.js";
import Pager from "./Pager.js";

const template = `
  <div>
    <MovieList />
    <Pager 
    :current="current" 
    :total="total" 
    :page-size="pageSize"
    @change-current="handleChange"/>
  </div>
 
`

export default{
  template,
  data() {
    return {
      current: 1,
      total: 100,
      pageSize: 10

    }
  },
  components: {
    MovieList,
    Pager
  },
  methods: {
    handleChange(newPage) {
      console.log(newPage)
      this.current = newPage;
    }
  },
}