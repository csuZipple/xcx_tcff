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
    temp:""
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
  
  },
  getText:function(event){
    this.makeToast("调用getText");
    var that = this;
    //添加msg
    if(event.detail.value!=""){
      var obj = {
        name: "默认名",
        text: "",
        time: ""
        };
      var time = util.formatTime(new Date());  
      obj.time=time;
      obj.text = event.detail.value;

      that.data.msg.push(obj);
      that.setData({
        temp: that.data.msg
      })
      event.detail.value="";

    }else{
      this.makeToast("留言不能为空");
    }
  },
  sendMsg: function(event){
    this.makeToast("等待审核");
    this.makeToast("审核成功");
    var tMsg = this.data.temp;
    this.setData({
      msg:tMsg
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