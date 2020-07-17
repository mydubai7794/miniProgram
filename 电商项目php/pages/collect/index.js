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
  handleurl(e) {
    let page_index = e.currentTarget.dataset["index"];
    wx.navigateTo({
      url: "/pages/goods_detail" + page_index + "/index",
    });
  },
});
