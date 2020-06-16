// pages/collect/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    collect: [],
  },
  onShow() {
    const collect = wx.getStorageSync("collect") || [];
    this.setData({
      collect,
    });
  },
});
