//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    current: 0,
  },
  handletap(e) {
    console.log(e);

    let current = e.currentTarget.dataset.current;
    this.setData({
      current: current,
    });
  },
});

