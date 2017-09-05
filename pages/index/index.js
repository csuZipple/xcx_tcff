//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    banner:[],
    models:[],
    infoType:[
      {text:"招聘求职",
        imageUrl:"../../resource/images/icon/boss.png",
        link: "../freeCar/freeCar?id=1"
       },{
        text: "拼顺风车",
        imageUrl: "../../resource/images/icon/car.png",
        link: "../freeCar/freeCar?id=2"
      }, {
        text: "二手交易",
        imageUrl: "../../resource/images/icon/trade.png",
        link: "../freeCar/freeCar?id=3"
      }, {
        text: "房屋出兑",
        imageUrl: "../../resource/images/icon/home.png",
        link: "../freeCar/freeCar?id=4"
      }, {
        text: "车辆买卖",
        imageUrl: "../../resource/images/icon/car_manage.png",
        link: "../freeCar/freeCar?id=5"
      },{
        text: "附近商家",
        imageUrl: "../../resource/images/icon/shop.png",
        link: "../freeCar/freeCar?id=7"
      }, {
        text: "其他信息",
        imageUrl: "../../resource/images/icon/others.png",
        link: "../freeCar/freeCar?id=6"
      }, {
        text: "发布",
        imageUrl: "../../resource/images/icon/deploy.png",
        link:"../publish/publish"
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


    wx.request({
      url: getApp().globalData.adverts,//上线的话必须是https，没有appId的本地请求貌似不受影响  
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
      // header: {}, // 设置请求的 header  
      success: function (res) {
        console.log(getApp().globalData.userInfo)
        console.log(res)
        that.setData({
          banner: res.data
        })
      },
      fail: function () {
        // fail  
      },
      complete: function () {
        // complete  
      }
    }) ,
      wx.request({
      url: getApp().globalData.latest,//上线的话必须是https，没有appId的本地请求貌似不受影响  
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
        // header: {}, // 设置请求的 header  
        success: function (res) {
          console.log(res)
          that.setData({
            models: res.data.data
          })
        },
        fail: function () {
          // fail  
        },
        complete: function () {
          // complete  
        }
      }) 

  },
  linkTo: function (event) {
    wx.navigateTo({
      url: event.target.dataset.link,
    })
  },
  listenSwiper:function(event){
    console.log(event);
  }
})
