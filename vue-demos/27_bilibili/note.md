## 接口

# 练习_bilibili首页

1.轮播图

baseURL: 'https://developer.duyiedu.com/vue/bz'
url: '/banner'

2.导航

baseURL: 'https://developer.duyiedu.com/vue/bz'
url: '/nav'

3.视频

baseURL: 'https://developer.duyiedu.com/vue/bz'
url: '/video'
Request:

  name | type | describe 
  :-: | :-: | :-: 
  start | Number | 数据起始值
  offset | Number | 偏移量


## nav-box

## banner-box
```html
 <div class="banner-box">
  <ul class="banner-list">
    <li><a href="javascript:;"><img src="" alt=""></a></li>
    <li><a href="javascript:;"><img src="" alt=""></a></li>
    <li><a href="javascript:;"><img src="" alt=""></a></li>
  </ul>
</div>
```
```CSS
.banner-box{
  position: relative;
  top: 2rem;
  width: 350px;
  height:110px;
  overflow: hidden;
}
.banner-box .banner-list{
  position: absolute;
  left:0;
  width:calc(350px*3);
}
.banner-box .banner-list .banner{
  float:left;
  width: 350px;
  height:110px;
}
```

1. banner-list 的绝对定位
banner-list 如果是绝对定位, 其宽度由其子级(所有的li宽度撑开)决定
如果banner-list不是"绝对定位",其宽度则由父级决定


## video-list
1. 文字2行 - height - webkit-line-clamp
多行文本打点, 结合height
+ hei-o-d-ori-lineclamp
```css
 .video-item .item-title{
   height: 38px;

  overflow: hidden;
  
  display: -webkit-box; /* 设置盒子为伸缩盒 */
  -webkit-box-orient: vertical;/* 设置伸缩盒内子元素的排列方式未vertical */
  -webkit-line-clamp:2;/* 限制一个块原素内显示的文本行数  */

 }
```

2. 单行文本
```css
 .video-item .item-title{
   height: 38px;

   white-space:nowrap;
   text-overflow: ellipsis;
 }
```

2. 屏幕滚动, 触发滚动事件
+ 关于body,html的高度, 如果高度为auto, 是无发触发scroll的事件的
+ body, html比较特殊, 他们的高度由内容撑开, 默认没有值, 就是auto
 ```css
  body, html{
    height: 100%
  }
  #app{
    height:100%;
   overflow-y: scroll;
  }

 ```

 3. 滚动内容. 获取[滚动条距离底部的距离]
scrollHeight, offsetHeight, scrollTop
(sH,oH, sT)
+ 滚动到底部的时候: scrollHeight = offsetHeight  + scrollTop;
+ 滚动条距离底部的高度: toBottomHeight = scrollHeight - offsetHeight - scrollTop

4. 并发请求, 在creat()当中有3个请求, 可以使用 
+ axios.all([...])
+ axios.spead((xxx)=> {})

```jsx
axios.all([...]).then(axios.spread(navRes, bannerRes,videoRes)=> {

})
```