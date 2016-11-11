//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    expressNu:null,
    expressInfor:null
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getInputValue:function(e){
    this.setData({expressNu:e.detail.value});
  },
  btnclick:function(){
    // console.log(this);
    var thispage = this;
    app.getExpressInfor(this.data.expressNu,function(data){
      // console.log(thispage);
      thispage.setData({expressInfor:data});
    });
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
