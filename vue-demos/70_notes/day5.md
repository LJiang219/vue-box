## vuex
> 1:30

vuex 用于解决大量的,复杂的组件间共享数据的问题

通过```new Vuex.Store(配置对象)```创建仓库, 通常一个vue应用, 对应一个仓库

配置对象中, 可以配置下面的内容:

1. state: 仓库的默认状态
2. mutations: 配置的是状态有哪些变化, **mutation是状态变化的唯一的原因**
  1. mutation的参数
    + state
    + payload
  2. 不可以直接调用mutation, 必须通过```仓库对象.commit```进行调用
    + 参数1: mutation的名称
    + 参数2: payload
  3. **mutation用于不可以出现异步等副租用操作**
    + 没有ajax
    + 没有dom处理
    + 没有外部数据处理
    + 没有当前时间
    + 没有随机数
3. actions: 配置副作用操作
  1. 每个action是一个函数
    + 参数1; 上下文对象, 几乎等同于仓库对象
    + 参数2; payload
  2. 不能直接调用action, 必须通过```仓库对象.dispatch```调用

vuex + vue:

1. 当配置了vuex后, 所有vue实例都会出现一个属性: $store
2. 如果组件需要使用仓库中的数据, 需要使用[计算属性]封装, 参考Login.js中的computed
3. 可以使用Vuex.mapState函数简化操作

```jsx
//Login.js
  computed: {
    isLoading() {
      return this.$store.state.loginUser.isLoging
    }
  },
```

更简答的写法: Vuex.mapState
```jsx
//Login.js
computed: Vuex.mapState({
  isLoading: state => state.loginUser.isLoging
}),
```

业务: 要求登录之后, 才能访问"电影页"