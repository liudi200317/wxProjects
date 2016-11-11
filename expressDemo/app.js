//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  getExpressInfor:function(nu,cb){

      // wx.request({
      //   url: 'test.php', //仅为示例，并非真实的接口地址
      //   data: {
      //     x: '' ,
      //     y: ''
      //   },
      //   header: {
      //       'Content-Type': 'application/json'
      //   },
      //   success: function(res) {
      //     console.log(res.data)
      //   }
      // })
      var expressInfor = 
              {
                  "success": true,
                  "reason": "",
                  "data": [
                      {
                          "time": "2016-04-26 00:21:26",
                          "context": "到潍坊市【潍坊转运中心】"
                      },
                      {
                          "time": "2016-04-25 18:16:34",
                          "context": "威海市【威海集散仓】，正发往【潍坊转运中心】"
                      },
                      {
                          "time": "2016-04-25 18:15:42",
                          "context": "到威海市【威海集散仓】"
                      },
                      {
                          "time": "2016-04-25 15:16:00",
                          "context": "威海市【荣成】，正发往【威海集散仓】"
                      },
                      {
                          "time": "2016-04-25 15:15:27",
                          "context": "威海市【荣成】，【林波/13863000310】已揽收"
                      },
                       {
                          "time": "2016-04-26 00:21:26",
                          "context": "到潍坊市【潍坊转运中心】"
                      },
                      {
                          "time": "2016-04-25 18:16:34",
                          "context": "威海市【威海集散仓】，正发往【潍坊转运中心】"
                      },
                      {
                          "time": "2016-04-25 18:15:42",
                          "context": "到威海市【威海集散仓】"
                      },
                      {
                          "time": "2016-04-25 15:16:00",
                          "context": "威海市【荣成】，正发往【威海集散仓】"
                      },
                      {
                          "time": "2016-04-25 15:15:27",
                          "context": "威海市【荣成】，【林波/13863000310】已揽收"
                      },
                       {
                          "time": "2016-04-26 00:21:26",
                          "context": "到潍坊市【潍坊转运中心】"
                      },
                      {
                          "time": "2016-04-25 18:16:34",
                          "context": "威海市【威海集散仓】，正发往【潍坊转运中心】"
                      },
                      {
                          "time": "2016-04-25 18:15:42",
                          "context": "到威海市【威海集散仓】"
                      },
                      {
                          "time": "2016-04-25 15:16:00",
                          "context": "威海市【荣成】，正发往【威海集散仓】"
                      },
                      {
                          "time": "2016-04-25 15:15:27",
                          "context": "威海市【荣成】，【林波/13863000310】已揽收"
                      }
                  ],
                  "status": 3,
                  "exname": "huitongkuaidi",
                  "ico": "http://www.kuaidi.com/data/upload/201407/htky_logo.gif",
                  "phone": "400-956-5656",
                  "url": "http://www.800bestex.com",
                  "nu": "70186506140478",
                  "company": "百世汇通"
              };

      var str = 'app.js 中 的 getExpressInfor 方法 '+nu;
      cb(expressInfor);

  },
  globalData:{
    userInfo:null
  }
})