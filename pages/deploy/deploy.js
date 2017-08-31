// deploy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    errorTips:"null",
    showError:"none",
    tip: '',
    buttonDisabled: false,
    modalHidden: true,
    show: false,
    register:{
      creator:"",
      title:"",
      description:"",
      phone:"",
      location:"",
      shop_type:"",
      model_type:""
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     wx.setNavigationBarTitle({
       title: '商店注册',
     });
     //获取当前页面的指针?
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
    //判断表单数据是否符合规定,不为空，格式符合要求
       if(this.data.register["creator"]==""){
         that.makeToast("店主姓名不能为空！")
       } else if (this.data.register["title"] == "") {
         that.makeToast("店名不能为空！")
       } else if (this.data.register["description"] == "") {
         that.makeToast("商店描述不能为空！")
       } else if (this.data.register["phone"] == "") {
         that.makeToast("联系方式不能为空！")
       } else if (this.data.register["location"] == "") {
         that.makeToast("地址不能为空！")
       }else{
         //如果提交成功--启动对话框

         wx.request({
           url: 'https://ice97.cn/xcx/models/',
           header: {
             "Content-Type": "application/x-www-form-urlencoded"
           },
           method: "POST",
           data: { creator: this.data.register["creator"], 
                   title: this.data.register["title"], 
                   description: this.data.register["description"], 
                   location: this.data.register["location"], 
                   phone: this.data.register["phone"], 
                   //shop_type,model_type
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
           error:function(error){
             console.log(error);
           }
           })


        //  this.setData({
        //    modalHidden: !this.data.modalHidden
        //  })
       }
    
   
    //清除数据
  },
  formReset: function () {
    console.log('form发生了reset事件')
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
  }
  // "creator": "sdfasdfasdf",   //唯一标识
  // "title": "中南大学汉堡店",
  // "description": "中南大学汉堡店是致力于为学生服务的快餐店，美味可口，欢迎广大师生前来捧场~",
  // "phone": "18373153353",
  // "locaiton": "中南大学铁道学院",
  // "type": "快餐",
  // "model_type": 7   //这个是type
})