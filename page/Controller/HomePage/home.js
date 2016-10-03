
var windowWidth = 0;
// var talkId = false;//
wx.getSystemInfo({
  success: function(res) {
    // console.log(res.model)
    // console.log(res.pixelRatio)
    // console.log(res.windowWidth)
    // console.log(res.windowHeight)
    // console.log(res.language)
    // console.log(res.version)
    windowWidth = res.windowWidth; 
  }
}),

Page({
  data:{
    // text:"这是一个页面"
    adsArray:[{
        "ds_img":'/image/ds.jpg',
        "ds" : "dushuai",
        "datail":"大甩卖",
        "goods" :["/image/wechat.png","/image/wechat.png","/image/wechat.png"]
    },{
        "ds_img":'/image/ds.jpg',
        "ds" : "suidonghan",
        "datail":"大衣",
        "goods" :["/image/wechat.png","/image/wechat.png","/image/wechat.png"]
    },{
        "ds_img":'/image/ds.jpg',
        "ds" : "yuanye",
        "datail":"链家网",
        "goods" :["/image/wechat.png","/image/wechat.png","/image/wechat.png"]
    }],
    root_data:[
      {
        "shop_id" : "2016100301",
        "shop_name" : "一表人才0",
        "shop_owner" : "ds0",
        "shop_owner_img" : "/image/watch01.jpg",
        "goods": [
          "/image/fen.jpg",
          "/image/fen.jpg",
          "/image/fen.jpg",
          "/image/fen.jpg",
          "/image/fen.jpg",
        ]
      },
       {
        "shop_id" : "2016100302",
        "shop_name" : "一表人才1",
        "shop_owner" : "ds1",
        "shop_owner_img" : "/image/fen.jpg",
        "goods": [
          "/image/fen.jpg",
          "/image/fen.jpg",
          "/image/fen.jpg",
          "/image/fen.jpg",
        ]
      },
       {
        "shop_id" : "2016100303",
        "shop_name" : "一表人才2",
        "shop_owner" : "ds2",
        "shop_owner_img" : "/image/fen.jpg",
        "goods": [
          "/image/fen.jpg",
          "/image/fen.jpg",
          "/image/fen.jpg",
          "/image/fen.jpg",
        ]
      },
       {
        "shop_id" : "2016100304",
        "shop_name" : "一表人才3",
        "shop_owner" : "ds3",
        "shop_owner_img" : "/image/fen.jpg",
        "goods": [
          "/image/fen.jpg",
        ]
      },
    ],
    totalPage:15,
    indicatorDots:true,
    autoplay:true,
    interval:2000,
    swiperDuration:1000,
    talkViewShowIdIndex:-1,//打开聊天下拉界面的默认idid = -1
    talkViewOpen:false,
    talkMessage: 'xxx : \n······21312313133123vfvdsds423133133123vfvdsds4243133123vfvdsds4243133123vfvdsds4243123vfvdsds42442vdfvefw'
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
    this.setData({widnowWidth:windowWidth});
    console.log(this.data.widnowWidth);
  },
  onReady:function(){
    // 页面渲染完成
    console.log('完成');
    //将数据绑定
    for(var i = 0; i < this.data.root_data.length; i++) {
      console.log(i);
    }
    //创建点击对话弹出view的动画
    this.animation = wx.createAnimation();
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
  chatWithShop(e) {
   
   if(this.data.talkViewShowIdIndex == e.currentTarget.id && this.data.talkViewOpen == true ) {
     //关闭
     this.animation.rotate(-0).scale(1).step({duration:300});
     this.setData({talkViewOpen:false,animation:this.animation.export()})
     console.log(1111);
   }
   else {
    //   this.animation.rotate(0, 0)
    //               .scale(1)
    //               .translate(0, 0)
    //               .skew(0, 0)
    //               .step({ duration: 0 })
    // this.setData({ animation: this.animation.export() })
     //打开动画
     this.animation.rotate(-90).scale(1.5).step({duration:300});
    console.log(this.data.widnowWidth);
     this.setData({talkViewShowIdIndex:e.currentTarget.id,talkViewOpen:true,animation:this.animation.export()})
   }
  },
  pushDetail(event) {
    wx.navigateTo({
      url: '../detail/index?type=' + event.currentTarget.dataset.type
    })
    
  }
})