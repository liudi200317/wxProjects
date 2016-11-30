Page({
  data:{
    items:[
      {
        sid:"1001",
        shopName:"第一家店铺",
        proList:[
          {
            pUrl:"../../images/demo.jpg",
            proName:"1000超级好吃的蛋糕",
            price:"100",
            num:'20'
          
          },
          {
            pUrl:"../../images/demo.jpg",
            proName:"1001超级好吃的蛋糕",
            price:"100",
            num:'20'
          
          }
        ]
      },
      {
        sid:"1002",
        shopName:"第二家店铺",
        proList:[
          {
            pUrl:"../../images/demo.jpg",
            proName:"2000超级好吃的蛋糕",
            price:"100",
            num:'40'
          
          },
          {
            pUrl:"../../images/demo.jpg",
            proName:"2001超级好吃的蛋糕",
            price:"100",
            num:'40'
          
          }
        ]
      }
      ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  checkboxChange:function(e){
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  }
})