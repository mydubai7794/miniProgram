// pages/order1/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    order: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    const openid = wx.getStorageSync("openid");
    var that = this;
    wx.request({
      url: "https://www.dubai7794.xyz/test/testGet.php",
      data: { openid: openid },
      header: { "content-type": "application/json" },
      method: "GET",
      dataType: "json",
      responseType: "text",
      success: (result) => {
        // console.log(result);
        // console.log(result.data.user[0].goods_scores);
        that.setData({
          // for (var i = 0;i<this.data.order.user.length)
          order: result.data.user,
        });
      },
      fail: () => {},
      complete: () => {},
    });
  },
});
