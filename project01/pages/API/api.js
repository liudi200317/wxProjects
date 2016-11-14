Page({
  data:{
      show:"",
     
      apiList:[{
        id:"1",
        name:"网络",
        subList:[{
          id:"101",
          name:"发起请求",
          desc:"wx.request",
          url:"#"
        },
        {
          id:"102",
          name:"上传、下载",
          desc:"wx.uploadFile、wx.downloadFile",
          url:"#"
        }],
        isOpen:false,
        openClass:"no",
        animationData:{}
      },{
        id:"2",
        name:"媒体",
        subList:[{
          id:"201",
          name:"图片",
          desc:"wx.chooseImage",
          url:"#"
        }],
        isOpen:false,
        openClass:"no"
      }
      ]
  },

  showMenu:function(event){
    
      // this.setData({apiList:[]});
      // console.log("3:",event.currentTarget);

      // var animation = wx.createAnimation({
      //     duration: 1000,
      //       timingFunction: 'ease',
      //   })

      var _currentTarget = event.currentTarget.id;
      var _apiList = this.data.apiList,
        i = 0,
        len = _apiList.length;

      for(;i<len;i++){
        var _apiItem = _apiList[i];
        console.log(_currentTarget)
        console.log(_apiItem.id)
        console.log(_currentTarget == _apiItem.id)
        if(_currentTarget == _apiItem.id){
          var isOpen = !_apiItem.isOpen;
          var _open = isOpen ? "show" :"";
          _apiItem.openClass = _open;
          _apiItem.isOpen = isOpen;

          if(isOpen){
            // animation.translateX(0).opacity(1).height("auto").step()
            
          }else{
              // animation.translateX("100px").opacity(0).height("0").step()
          }
          //  _apiItem.animationData = animation.export()

          break;

        }
      }

      // console.log(_apiList);

      this.setData({apiList:_apiList});

  }
})