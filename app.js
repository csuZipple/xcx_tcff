//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        },
        fail:function(res){
          cb(false);
        }
      })
    }
  },

  globalData: {
    userInfo: null,
    tag_url:'https://www.ice97.cn/xcx/getTag/',
    model_url:'https://www.ice97.cn/xcx/models/',
    models_url:"https://www.ice97.cn/xcx/beans/all/",
    latest:'https://www.ice97.cn/xcx/getLatest/',
    adverts: 'https://www.ice97.cn/xcx/adverts/',
    search:'https://www.ice97.cn/xcx/search/'
  }
})
