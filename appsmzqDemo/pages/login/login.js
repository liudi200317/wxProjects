var app = getApp();
Page({
  data:{
   username:"",
   password:""
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

  getUserName:function(event){
    
    this.setData({username:event.detail.value});
  },

  getPassword:function(event){
    this.setData({password:event.detail.value});
  },

  login:function(event){
    
    app.globalData.userInfo = {
      username:this.data.username,
      password:this.data.password
    }
    wx.redirectTo({
      url: '../user/user'
    })

  }

})