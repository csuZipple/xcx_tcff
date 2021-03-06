// pages/freeCar/freeCar.js
Page({

  /**
   * 页面的初始数据
   */
  // phone location pictures   extra1  extra2

  data: {
    search_text:null,
    tags:{},//静态信息
    model:{},//动态信息
    //控制
    showPhone:"none",
    showLocation:"none",
    showPictures:"none",
    showExtra1:"none",
    showExtra2:"none",
    tag_id:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var id = options.id;
    that.setData({
      tag_id:id
    })
    //获取tag
    wx.request({
      url: getApp().globalData.tag_url+id+"/",//上线的话必须是https，没有appId的本地请求貌似不受影响  
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
      // header: {}, // 设置请求的 header  
      success: function (res) {

        if(res.data.location){
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
    //获取某类model
    wx.request({
      url: getApp().globalData.models_url+id+"/",//上线的话必须是https，没有appId的本地请求貌似不受影响  
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
  linkTo: function (event) {
    var that = this;
    wx.navigateTo({
      url: "../detail/detail?id=" + event.currentTarget.dataset.id+"&tag_id="+that.data.tag_id,
    })
  },
  deploy:function(event){
    var that = this;
    wx.navigateTo({
      url: "../deploy/deploy?id=" + that.data.tag_id
    })
  },
  searchInput:function(event){
    this.setData({search_text:event.detail.value})
  },
  search:function(event){
    var that = this;
    wx.request({
      url: getApp().globalData.search + that.data.search_text + "/"+that.data.tag_id+"/",//上线的话必须是https，没有appId的本地请求貌似不受影响  
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
  }
})