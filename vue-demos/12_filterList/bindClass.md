## v-bind:class 的写法

1. 需求: 根据条件, 渲染class
```html
<!-- 默认 -->
<div class=" type" >xxxx</div>

<!-- 高亮 -->
<div class="active type" >xxxx</div>
```

2. 书写方式
+ 
  + 书写: 
+ 数组
  + <div :class="[datas.key1, datas.key2]">xxx</div>

  ```js
    datas:{
      activeClass: 'active',
      errorClass: 'text-danger'
    }
  ```


###  对象
1. 模板: <div :class="{css.className: datas.key}">xxx</div>

2. 例如:
```css
 .active{
   color: #f40
 }
```
```html
 <div :class="{active: isActive}">xxx</div>
```

```js

const vm = new Vue({
  el:"#app",
  datas: {
    isActive: true,
    activeClass(data.key) : "active" (css中的类名),
    typeClass(data.key) : "type" (css中的类名)
  }
})
```

### 数组

1. 模板: <div :class="[datas.key1, datas.key2]">xxx</div>
2. 例如: 
```css
  .active{
    color: #f40;
  }
  .type{
    color:#333;
  }
```

```html
  <div :class="[activeClass, typeClass]" >xxx</div>
```
```js
  datas: {
    // key: css.className
    activeClass: 'active',
    typeClass: 'type'
  }
```


### 根据条件切换列表中的class

1. 数组
```html
<!-- <div :class="[datas.key ? datas.key : '' , datas.key]"> -->
 <div :class="[isActive ? activeClass : '' , typeClass]">xxx</div>
```
```js
  datas: {
    isActive: true
    activeClass: 'active',
    typeClass: 'type'
  }
```

2. 数组里写对象
```html
  <div :class="[{active: isActive}, typeClass]">xxx</div>
```