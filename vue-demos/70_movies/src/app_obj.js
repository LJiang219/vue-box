//根组件, 整个页面的内容靠该组件完成
import MovieList from "./MovieList.js";
import Pager from "./Pager.js";

const template = `
  <div>
    <MovieList />
    <Pager :pageObj="pageObj"/>
  </div>
 
`

export default{
  template,
  data() {
    return {
      pageObj: {
        current: 1,
        total: 100,
        pageSize: 10,
        panelNumber: 5
      }
    }
  },
  components: {
    MovieList,
    Pager
  },
}