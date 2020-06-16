// pages/user/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userinfo: {},
  },
  handleget(e) {
    const { userInfo } = e.detail;
    wx.setStorageSync("userinfo", userInfo);
  },
  onShow() {
    const userinfo = wx.getStorageSync("userinfo");
    this.setData({ userinfo });
  },
});
