//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
   
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      
    }else{
      //调用登录接口
      
    }
  },
  globalData:{
    userInfo:null
  }
})