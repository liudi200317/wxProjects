Page({
  data:{
      apiList:[{
        id:"1",
        name:"网络",
        subList:[{
          id:"101",
          name:"发起请求",
          desc:"wx.request",
          url:"network/network"
        },
        {
          id:"102",
          name:"上传、下载",
          desc:"wx.uploadFile、wx.downloadFile",
          url:"network/upload/upload"
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
          url:"media/picture/picture"
        }],
        isOpen:false,
        openClass:"no"
      }
      ]
  },
/**
 * 列表切换效果
 */
  showMenu:function(event){

      var _currentTarget = event.currentTarget.id,
          _apiList = this.data.apiList,
          i = 0,
          len = _apiList.length;

      for(;i<len;i++){
        var _apiItem = _apiList[i];
        if(_currentTarget == _apiItem.id){
          var isOpen = !_apiItem.isOpen;
          var _open = isOpen ? "show" :"";
          _apiItem.openClass = _open;
          _apiItem.isOpen = isOpen;
          break;
        }
      }

      this.setData({apiList:_apiList});
  }


})