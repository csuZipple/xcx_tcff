//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    infoType:[
      {text:"招聘求职",
        imageUrl:"../../resource/images/icon/shop.png",
        link: "../deploy/deploy"
       },{
        text: "拼顺风车",
        imageUrl: "../../resource/images/icon/shop.png",
        link: "../deploy/deploy"
      }, {
        text: "二手交易",
        imageUrl: "../../resource/images/icon/shop.png",
        link: "../deploy/deploy"
      }, {
        text: "房屋出兑",
        imageUrl: "../../resource/images/icon/shop.png",
        link: "../deploy/deploy"
      }, {
        text: "车辆买卖",
        imageUrl: "../../resource/images/icon/shop.png",
        link: "../deploy/deploy"
      }, {
        text: "其他信息",
        imageUrl: "../../resource/images/icon/shop.png",
        link: "../deploy/deploy"
      }, {
        text: "附近商家",
        imageUrl: "../../resource/images/icon/shop.png",
        link: "../deploy/deploy"
      }, {
        text: "发布",
        imageUrl: "../../resource/images/icon/shop.png",
        link:"../deploy/deploy"
      },
      
    ]
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
  },
  linkTo: function (event) {
    wx.navigateTo({
      url: event.target.dataset.link,
    })
  }
})
