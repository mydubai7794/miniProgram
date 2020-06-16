const app = getApp();
Page({
  data: {
    price: 1,
  },

  onInput(event) {
    this.setData({ price: event.detail.value });
  },

  pay() {
    wx.cloud.callFunction({
      name: "wx",
      data: { total_fee: 1 },
      // 可传入相关参数。

      success: (res) => {
        console.log(res.result);
        if (!res.result.appId) return;
        wx.requestPayment({
          ...res.result,
          success: (res) => {
            console.log(res);
          },
        });
      },
      fail: (err) => {
        console.log("1111");
        console.error(err);
      },
    });
  },
});
