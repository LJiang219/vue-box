## 组件中的props的验证
String, Number, Boolean, Array, Object, Function, Promise
+ 注意: 'null', 'undefined' 会通过任何类型验证
+ 高级验证
  - type
  - default:
    - string
    - prop is a obj or array, default is function
  - required: true/false
  - validator: functiion(prop)
```js
  Vue.component('my-component', {
    props: {
      type: String, 
      default: 0,
      default() {
        return {a:1, b: 2}
      }
      required:
      validator(prop) {
        return prop.length < 10  // 校验成功-return true
      }
    }
  })

```