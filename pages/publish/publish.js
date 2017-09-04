// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoType: [
      {
        text: "招聘求职",
        imageUrl: "../../resource/images/icon/boss.png",
        link: "../deploy/deploy?id=1"
      }, {
        text: "拼顺风车",
        imageUrl: "../../resource/images/icon/car.png",
        link: "../deploy/deploy?id=2"
      }, {
        text: "二手交易",
        imageUrl: "../../resource/images/icon/trade.png",
        link: "../deploy/deploy?id=3"
      }, {
        text: "房屋出兑",
        imageUrl: "../../resource/images/icon/home.png",
        link: "../deploy/deploy?id=4"
      }, {
        text: "车辆买卖",
        imageUrl: "../../resource/images/icon/car_manage.png",
        link: "../deploy/deploy?id=5"
      }, {
        text: "附近商家",
        imageUrl: "../../resource/images/icon/shop.png",
        link: "../deploy/deploy?id=7"
      }, {
        text: "其他信息",
        imageUrl: "../../resource/images/icon/others.png",
        link: "../deploy/deploy?id=6"
      }]
  },
  linkTo: function (event) {
    wx.navigateTo({
      url: event.target.dataset.link,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})