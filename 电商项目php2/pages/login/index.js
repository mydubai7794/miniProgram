// pages/login/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {},
  handleget(e) {
    const { userInfo } = e.detail;
    wx.setStorageSync("userinfo", userInfo);
    wx.navigateBack({
      delta: 1,
    });
  },
});
