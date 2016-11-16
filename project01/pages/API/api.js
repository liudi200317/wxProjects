Page({
  data:{
      apiList:[{
        id:"1",
        name:"网络",
        subList:[{
          id:"101",
          name:"发起请求",
          url:"network/network"
        },
        {
          id:"102",
          name:"上传、下载",
          url:"network/upload/upload"
        }],
        isOpen:false,
        openClass:"",
        animationData:{}
      },{
        id:"2",
        name:"媒体",
        subList:[{
          id:"201",
          name:"图片",
          url:"media/picture/picture"
        },{
          id:"201",
          name:"音乐播放控制",
          url:"media/music/music"
        }],
        isOpen:false,
        openClass:""
      },{
        id:"3",
        name:"数据",
        subList:[{
          id:"301",
          name:"数据缓存",
          url:"storage/storage"
        }],
        isOpen:false,
        openClass:""
      },{
        id:"4",
        name:"位置",
        subList:[{
          id:"401",
          name:"获取位置",
          url:"location/getLocation/getLocation"
        },{
          id:"402",
          name:"查看位置",
          url:"location/openLocation/openLocation"
        }],
        isOpen:true,
        openClass:"show"
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