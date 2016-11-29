Page({
  data:{
      userInfor:{}
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
  login:function(){
        var that = this
        wx.login({
            success: function(res) {
                console.log(res);
                if (res.code) {

                    wx.getUserInfo({
                        success: function(res) {
                            console.log(res);
                            that.setData({userInfo:res.userInfo})
                        }
                    })


                //发起网络请求
                    // wx.request({
                    //     url: 'https://test.com/onLogin',
                    //     data: {
                    //         code: res.code
                    //     },
                    //     success: function(res) {
                    //         console.log(res.data)
                    //     },
                    //     fail: function(error) {
                    //         console.log(error)
                    //     }
                    // })

                } else {
                    console.log('获取用户登录态失败！' + res.errMsg)
                }
            }
            });

  }
})