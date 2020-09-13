

const template = `
  <div class="pager">
  
    <a @click="changePage(1)" class="pager-item" :class="{disabled: pageObj.current === 1}">首页</a>
    <a @click="changePage(current-1)" class="pager-item" :class="{disabled: pageObj.current === 1}">上一页</a>

    <a @click="changePage(p)" class="pager-item" :class="{active: pageObj.current==p}" v-for="p in numbers">{{p}}</a>

    <a @click.prevent="changePage(pageObj.current+1)" class="pager-item" 
    :class="{disabled: pageObj.current === pageNumber}">下一页</a>
    <a @click="changePage(pageNumber)" class="pager-item" 
    :class="{disabled: pageObj.current === pageNumber}">尾页</a>

    <span class="pager-text">
      <i>{{pageObj.current}}</i>/<i>{{pageNumber}}</i>
    </span>
  </div>
`

export default {
  template,
  // props: ["current", "total", "pageSize", "panelNumber"],
  props: {
    pageObj:{
      type: Object,
      default:{
        curren: {
          type: Number,
          required: true,
          default: 1
        },
        total: {
          type: Number,
          required: true,
        },
        pageSize:{
          type: Number,
          default: 5
        },
        panelNumber:{
          type: Number,
          default: 5
        }
      }
    }
  },
  // data(){ 
  //   return{
  //     //返回的结果是组件的状态
  //     current: 1,  //当前页码
  //     total: 80, //总数据量
  //     pageSize: 5, // 页容量
  //     panelNumber: 5 //最多显示的数字页码的数量
  //   }
  // },
  computed:{
    pageNumber(){
     
      return Math.ceil(this.pageObj.total / this.pageObj.pageSize)
    },
    numbers(){
      //获取分页面板的min, max
      let min = this.pageObj.current - Math.floor(this.pageObj.panelNumber/2);
      if(min < 1){
        min = 1;
      }
      let max = min + this.pageObj.panelNumber -1;
      if(max > this.pageNumber){
        max = this.pageNumber;
      }
      const arr = [];
      for(let i = min; i <= max; i++){
        arr.push(i)
      }
      return arr;
    }
  },
  methods: {
    changePage(newPage) {
      if(newPage <= 0){
        newPage = 1;
      }
      if(newPage >= this.pageNumber){
        newPage = this.pageNumber
      }
      this.pageObj.current = newPage; 
    }
  },
}