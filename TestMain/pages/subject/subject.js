// pages/subject/subject.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    navbar:['推荐','发现'],
        currentTab:0,
  },
  //响应点击导航栏
  navbarTap:function(e){
    var that=this;
    that.setData({
      currentTab:e.currentTarget.dataset.idx,
      TypeItem:that.data.navbar[that.data.currentTab]
    })
  },
  //跳转尝试
  seeDetail:function(){
    wx.navigateTo({
      url: '/pages/political/political',
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