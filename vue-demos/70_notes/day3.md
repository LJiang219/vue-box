#  vue组件间的数据通信

> prevent修饰符用于v-on指令, 表示阻止默认行为
  <a href="" v-on:click.prevent="">
> stop修饰符用于v-on指令, 表示阻止事件冒泡

## 组件的状态和属性
通常讲组件中需要自身管理的数据(组件配置中的data), 叫做组件状态(component state)

组件状态只能在组件内部使用, 外部原则上不可以使用

1. data在组件中的配置和在vue实例中国的配置的区别:
在组件中data必须是一个函数, 而vue实例中必须是一个对象

原因: vue实例中的data可以是一个对象, 因为只是使用一次.
vue的组件要被复用, 如果data使用对象,  所有组件就会共用相同的对象, 一个改变, 另外的也会改变. 所以vue组件data需要使用函数

2. 组件中可以有属性(component props), 而vue实例中没有
声明组件的属性时, 使用"-'或小驼峰命名法
传递组件属性时, 使用"-'或小驼峰命名法
属性会被提升到vue组件实例中 

**组价的属性是只读的, 不允许更改, 根本原因是要保证单向数据流**

在组件中触发事件:  ```this.$emit("事件名")

用在组件上的v-model
+ v-model是个语法糖
+ 使用这个用法糖, 要严格遵守 两个关键字: :value="xxx", @input=""
```js
 //使用这个组件
<div>
  <Pager v-model="current" />
</div>

//使用v-model 就相当于使用 v-bind:value="" 和 @input="xxx"
<div>
  <Pager v-bind:value="current" v-on:input="current=$event">
</div>
```

所以在定义这个组件Pager的时候, 一定要使用规定好的 [value] 和 [input]
```jsx
  Vue.component('Pager', {
    // props: ["value"],
    // 或者:
    props: {
      value:{
        type: Number,
        default: 1
      }
    },
    template: `<div>
      <a @click="changePage(p)" 
        class="pager-item" 
        :class="{active: value==p}" 
        v-for="p in numbers">{{p}}</a>
    </div>`,
    methods: {
      changePage(newPage){
        //...
        //这里一定要使用 input
        this.$emit('input', newPage)
        //...
      }
    }
  })
```

+ 另外, 用在 [表单组件]上的 [v-model],
请参考 https://cn.vuejs.org/v2/guide/components-custom-events.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84-v-model
 - 这里的封装的表单组件, 是指 <base-checkbox>, 不是指原生input
 - 对于input[text="text"], 默认 model:{prop: value, event: input}


2. Pager组件
+ curret 当前页码
+ pageSize 页容量 每页显示多少条数据
+ total 数据总量 总共有多少条数据
+ pageNumber 总页数 

3. 分页算法:
current: 1   pageSize: 2,  0 -- 2 
current: 2   pageSize: 2,  3 -- 4
current: 3   pageSize: 2,  4 -- 6

(current-1)*pageSize  ---  current* pageSize


### MovieList

1. key是内置属性, 当循环渲染自定义组件时, 建议使用该属性, 并且提供给唯一的值, 通常是id, 以便vue提高渲染效率


## 自定义事件

## 生命周期

![](./lifesycle.png)

+ beforeCreate: 组件实例刚刚创建好之后, 此时, 组件实例中还没有提升任何的成员
+ created:组件实例中已经提升了该有成员, 但是, 此时还没有渲染页面的任何内容
+ beforeMount: 组件即将进行渲染, 但是还没有进行渲染, 此时, 已经编译号模块, 渲染的所有条件已经满足
+ mounted: [重要!!!], 组件已经完成了渲染(页面可见)
 此时, 等待组件更新(当一个组件的属性或状态发生变化的时候, 会自动重新渲染)
+ beforeUpdate: 组件即将更新, 还没有更新, 此时,得到的数据是新的, 但是页面是旧的
+ updated: 组件已经完成更新, 此时数据和界面都是新的
+ beforeDestroy: 当组件即将被销毁时
+ destroyed:当组件已经被销毁后

## 插槽

具名插槽

## 题外话

1. arr.slice()
+ slice()定义：从已有的数组中返回你选择的某段数组元素 [截取]
+ slice()语法：arrayObject.slice(start,end)
+ 注：
  - start表示从何处开始选取，end表示从何处开始结束选取，表示一个选取的范围
  - start可以为负数，此时它规定从数组尾部开始算起的位置。也就是-1 ，指最后一个元素，-2 指倒数第二个元素，以此类推
  - end如果没有被指定参数，数组会包含从 start 到最后一个数组元素的所有元素
  - slice()方法[不会修改数组本身]，而是返回所选取范围的数组元素。
  - 如果想[删除]数组中的某一个元素，需要使用[splice()]
+ 例子:
  - 这里的取值范围是0-2（start-end），因为数组的下标是从0开始，所以这里的2就是下面数组中的 javascript元素
  - 这里需要注意的是0-2选取的元素是html和css，并不包括javascript
  - 如果只有start，则会选择start开始到end之间的所有数组元素
  - 如果start是负数，则会从数组尾部开始算起。这里只有start没有end,且start为负数，所以只能获取到最后1个数组元素
  - 如果你想获取除了最后1个元素以外的全部元素. 如果start和end都是负1，结果为空

2. arr.splice()
+ splice()定义：从数组中添加或删除元素，然后返回被删除的数组元素。
+ splice()语法：arrayObject.splice(index,howmany,item1,.....,itemX)
+ 注：
  - index表示从什么位置开始添加或删除数组元素
  - howmany表示删除的元素数量，如果为0，则表示不删除数组元素
  - tem1,.....,itemX表示新增的数组元素
  - slice()方法会改变原始数组
+ 下面来看一些例子
  - 从第3个元素（即 javascript）开始且不删除元素，并在第3个元素前面新增1个元素hello
  - 从第3个元素开始且删除1个元素（这里删除的元素是 javascript），并在原来第3个元素的位置新增1个元素hello
  - 从最后1个元素开始并删除最后1个元素，同时在删除的最后1个元素的位置新增1个元素hello
  - 从最后1个元素开始且不删除元素，同时在最后1个元素前面新增1个元素hello

　　　　　　　