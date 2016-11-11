Page({
  data:{
   newsList:[{
       id:1001,
       title:"新闻一"
   },{
       id:1002,
       title:"新闻二"
   }]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log("newsList...onLoad")
   
  },
  onReady:function(){
    // 页面渲染完成
    console.log("newsList...onReady")
    
  },
  onShow:function(){
    // 页面显示
    console.log("newsList...onShow")
   
  },
  onHide:function(){
    // 页面隐藏
    console.log("newsList...onHide")
    
  },
  onUnload:function(){
    // 页面关闭
    console.log("newsList...onUnload")
    
  }
})