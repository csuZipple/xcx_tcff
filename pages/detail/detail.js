// pages/detail/detail.js
var util = require('../../utils/util.js');  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:[
      {
        name:"zipple",
        text:"有人要搭顺风车吗",
        time:"2017-08-30 22:16"
        }
    ],
    tags: {},//静态信息
    model: {},//动态信息
    //控制
    showPhone: "none",
    showLocation: "none",
    showPictures: "none",
    showExtra1: "none",
    showExtra2: "none",
    temp:"",
    tag_id:"",
    model_id:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that =this;
    that.data.tag_id=options.tag_id;
    that.data.model_id=options.id;

    wx.request({
      url: getApp().globalData.tag_url + options.tag_id + "/",//上线的话必须是https，没有appId的本地请求貌似不受影响  
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
      // header: {}, // 设置请求的 header  
      success: function (res) {

        if (res.data.location) {
          that.setData({
            showLocation: "block"
          })
        }

        if (res.data.pictrues) {
          that.setData({
            showPictrues: "block"
          })
        }

        if (res.data.extra1) {
          that.setData({
            showExtra1: "block"
          })
        }

        if (res.data.extra2) {
          that.setData({
            showExtra2: "block"
          })
        }

        that.setData({
          tags: res.data
        })

        console.log(that.data)
      },
      fail: function () {
        // fail  
      },
      complete: function () {
        // complete  
      }
    })

    wx.request({
      url: getApp().globalData.model_url + options.id + "/",//上线的话必须是https，没有appId的本地请求貌似不受影响  
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
      // header: {}, // 设置请求的 header  
      success: function (res) {
        that.setData({
          model: res.data
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
  
  },
  getText:function(event){
    this.setData({
      msg:event.detail.value
    })
    
  },

  sendMsg: function(event){
    var that = this;
    wx.request({
      url: 'https://ice97.cn/xcx/comments/',
      header: {
        "Content-Type": "application/json"
      },
      method: "POST",
      data: {
        nickName:getApp().globalData.userInfo.nickName,
        content:that.data.msg,
        avatarUrl: getApp().globalData.userInfo.avatarUrl,
        model:that.data.model_id
      },
      success: function (res) {
        if (res.data.status == 0) {
          wx.showToast({
            title: res.data.info,
            icon: 'loading',
            duration: 1500
          })
        } else {
          wx.showToast({
            title: res.data.info,
            icon: 'success',
            duration: 1000
          })
        }
      },
      error: function (error) {
        console.log(error);
      }
    })
  },
  formReset:function(e){
     //提交数据

     
  },
  makeToast: function (title) {
    wx.showToast({
      title: title,
      icon: 'loading',
      duration: 1500
    })
    setTimeout(function () {
      wx.hideToast()
    }, 2000)
  },
})