// deploy.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    errorTips:"null",
    showError:"none",
    tip: '',
    buttonDisabled: false,
    modalHidden: true,
    show: false,
    authHidden:true,
    register:{
      creator:"",
      title:"",
      description:"",
      phone:"",
      location:"",
      shop_type:"",
      model_type:"",
      extra1:"",
      extra2:""
    },
    tag: {extra1:"一二三四",
          location:"一二三四",
          extra2:"一二三四"},//静态信息
    model: {},//动态信息
    //控制
    showPhone: "",
    showLocation: "",
    showPictures: "",
    showExtra1: "",
    showExtra2: ""
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     wx.setNavigationBarTitle({
       title: '发布信息',
     });
     //获取当前页面的指针?
     var that = this;
     var id = options.id;
     that.setData({
       tag_id: id
     })

     app.getUserInfo(function (userInfo) {
        if(userInfo == false){
          that.setData({
            authHidden:false
          })
        }
     })

     //获取tag
     wx.request({
       url: getApp().globalData.tag_url + id + "/",//上线的话必须是https，没有appId的本地请求貌似不受影响  
       data: {},
       method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
       // header: {}, // 设置请求的 header  
       success: function (res) {

         if (!res.data.location) {
           that.setData({
             showLocation: "display:none"
           })
         }

         if (!res.data.pictrues) {
           that.setData({
             showPictrues: "display:none"
           })
         }

         if (!res.data.extra1) {
           that.setData({
             showExtra1: "display:none"
           })
         }

         if (!res.data.extra2) {
           that.setData({
             showExtra2: "display:none"
           })
         }

         that.setData({
           tag: res.data
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
 
  getCurrentData:function(event){

    var name = event.target.dataset.name;
    var des = event.target.dataset.des;
     if(event.detail.value==""){
      this.setData({
        errorTips: des + "不能为空!",
        showError:"block"
      })
     }
     this.data.register[name]=event.detail.value;
     this.setData({
       register:this.data.register
     })

     console.log(this.data)
  },
  makeToast:function(title){
    wx.showToast({
      title: title,
      icon: 'loading',
      duration: 1500
    })
    setTimeout(function () {
      wx.hideToast()
    }, 2000)
  },
  formSubmit: function (e) {
    var that = this;

    if (app.globalData.userInfo == null){
      app.getUserInfo(function (userInfo) {
    //如果授权被拒绝过了  那么开启授权管理
        if(userInfo == false){
          wx.openSetting({
            success: (res) => {
              console.log("授权结果..")
              console.log(res)
              if (!res.authSetting.scope.userInfo || !res.authSetting.scope.userLocation) {
                //又被拒绝了
                wx.showToast({
                  title: "对不起，拒绝授权无法发布！",
                  icon: 'warning',
                  duration: 1500
                })
              }
            }
          })
        }

      })

      app.getUserInfo(function (userInfo) {
        if (userInfo == false) {
          wx.showToast({
            title: title,
            icon: 'warning',
            duration: 1500
          })
        }
        that.setData({
          userInfo: userInfo
        })
      })

      
    }

         wx.request({
           url: app.globalData.model_url,
           header: {
             "Content-Type": "application/json"
           },
           method: "POST",
           data: {
             model_type:that.data.tag_id,
             avatarUrl: getApp().globalData.userInfo.avatarUrl,
             nickName: getApp().globalData.userInfo.nickName, 
             title: that.data.register["title"], 
             description: that.data.register["description"], 
             location: that.data.register["location"], 
             phone: that.data.register["phone"], 
             extra1:that.data.register["extra1"],
             extra2: that.data.register["extra2"]
                   //shop_type,model_type
              },
           success: function (res) {
             console.log(res)
             if (res.statusCode != 201) {
               wx.showToast({
                 title: "发布失败",
                 icon: 'loading',
                 duration: 1500
               })
             } else {
               wx.showToast({
                 title: "发布成功",
                 icon: 'success',
                 duration: 1000
               })
             }
           },
           error:function(error){
             console.log(error);
           }
           })


        //  this.setData({
        //    modalHidden: !this.data.modalHidden
        //  })
      //  }
    
   
    //清除数据
  },
  formReset: function () {
    this.setData({
      register: {
        creator: "",
        title: "",
        description: "",
        phone: "",
        location: "",
        shop_type: "",
        model_type: "",
        extra1: "",
        extra2: ""
      }
    })
  },
  modalBindaconfirm: function () {
    this.setData({
      modalHidden: !this.data.modalHidden,
      show: !this.data.show,
      tip: '您点击了【确认】按钮！',
      buttonDisabled: !this.data.buttonDisabled
    })
  },
  modalBindcancel: function () {
    this.setData({
      modalHidden: !this.data.modalHidden,
      tip: '您点击了【取消】按钮！'
    })
  }, 
  authBindconfirm: function () {
    var that = this;
    app.getUserInfo(function (userInfo) {
      if (userInfo == false) {
        wx.openSetting({
          success: (res) => {
            console.log("授权结果..")
            console.log(res)
            if (!res.authSetting['scope.userInfo']) {
              //又被拒绝了
              that.setData({
                authHidden:false
              })
            }
          }
        })
      }
    })
  this.setData({
     authHidden: !this.data.authHidden
   })
  },
  authBindcancel: function () {
    wx.navigateBack({
      //返回之前的页面
    })
  }
  // "creator": "sdfasdfasdf",   //唯一标识
  // "title": "中南大学汉堡店",
  // "description": "中南大学汉堡店是致力于为学生服务的快餐店，美味可口，欢迎广大师生前来捧场~",
  // "phone": "18373153353",
  // "locaiton": "中南大学铁道学院",
  // "type": "快餐",
  // "model_type": 7   //这个是type
})