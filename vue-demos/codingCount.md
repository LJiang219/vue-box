## 仿淘宝商品筛选
0824 1

## 组件切换 - [<component :is>]
+ 动态组件: is属性将组件作为一个数据, 这个组件可以记录在data中, 也可以作为计算属性 
  - is绑定的组件名称 作为 计算属性, 参考 index2.html (39)
  - 写在 data 中, 作为一个动态的数据, 参考 index1.html
+ 在一个多标签的页面中, [不同组件之间进行的动态切换] 是通过 
  + :is
  + <component > 元素
+ code
```js
//组件会在`currentTabComponent`改变时改变
// 属性 is 绑定的是
  <component v-bind:is="currentTabComponent" ></component>
```

+ 请记住 模板
```js
 <div id="app">
    <div 
      v-for="item in pages" :key="item.id" 
      >{{item.name}}</div>

    <component v-bind:is="currentPage"></component>
  </div>
```
