

const template = `
  <div class="pager">
  
    <a @click="changePage(1)" class="pager-item" :class="{disabled: value === 1}">首页</a>
    <a @click="changePage(value-1)" class="pager-item" :class="{disabled: value === 1}">上一页</a>

    <a @click="changePage(p)" class="pager-item" :class="{active: value==p}" 
    v-for="p in numbers">{{p}}</a>

    <a @click.prevent="changePage(value+1)" class="pager-item" 
    :class="{disabled: value === pageNumber}">下一页</a>
    <a @click="changePage(pageNumber)" class="pager-item" 
    :class="{disabled: value === pageNumber}">尾页</a>

    <span class="pager-text">
      <i>{{ value}}</i>/<i>{{pageNumber}}</i>
    </span>
  </div>
`

export default {
  template,

  // props: ["value", "total", "pageSize", "panelNumber"],
  props: {
    value: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 5
    },
    panelNumber: {
      type: Number,
      default: 5
    },
    total:{
      type: Number
    }
  },
  // data(){ 
  //   return{
  //     //返回的结果是组件的状态
  //     value: 1,  //当前页码
  //     total: 80, //总数据量
  //     pageSize: 5, // 页容量
  //     panelNumber: 5 //最多显示的数字页码的数量
  //   }
  // },
  computed:{
    pageNumber(){
     
      return Math.ceil(this.total / this.pageSize)
    },
    numbers(){
      
      //获取分页面板的min, max
      let min = this.value - Math.floor(this.panelNumber/2);
      if(min < 1){
        min = 1;
      }
      let max = min + this.panelNumber -1;
      if(max > this.pageNumber){
        max = this.pageNumber;
      }
      // console.log(min, max, this.pageNumber)
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
      //修改了组件的属性, 应该avoid mutating prop
      //不可以直接修改属性
      // this.value = newPage; 

      //应该改变页码, 但是由于数据不是我的,我不能改, 只能触发事件,让父组件(使用这个组件的组件)收到通知
      // this.$emit('change-value', newPage);
      this.$emit('input', newPage)
    }
  },
}