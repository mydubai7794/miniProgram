// pages/cart/index.js
//微信支付
//  1选择企业账号
//    2企业账号的小程序后台 必须给 开发者 添加上白名单
const app = getApp();
import { showModal, request } from "../../request/index.js";
Page({
  data: {
    address: {},
    cart: [],
    cart2: [],

    totalprice: 0,
    totalnum: 0,
  },

  onShow() {
    const address = wx.getStorageSync("address");

    //1 获取缓存中的信息

    // 获取缓存中的购物车数据
    let cart = wx.getStorageSync("cart") || [];

    //过滤后的购物车数组
    cart = cart.filter((v) => v.checked);
    this.setData({
      address,
    });
    let totalprice = 0;
    let totalnum = 0;
    cart.forEach((v) => {
      totalprice += v.num * v.goods_price;
      totalnum += v.num;
    });

    this.setData({
      cart,
      totalprice,
      totalnum,

      address,
    });
  },

  pay() {
    // wx.cloud.callFunction({
    //   name: "testpay",
    //   data: {
    //     totalFee: 1,
    //   },
    //   // data: { totalFee: this.data.totalprice * 100 },                                                          //此处直接换价格即可
    //   success: (res) => {
    //     const payment = res.result.payment;
    //     console.log(res.result.payment);

    //     wx.requestPayment({
    //       ...payment,
    //       success: (res) => {
    //         //支付完成可执行的步骤
    //         console.log(res);

    //         let cart2 = wx.getStorageSync("cart") || [];
    //         console.log(cart2);

    //         wx.setStorageSync("cart2", cart2);
    //         let newCart = wx.getStorageSync("cart");
    //         newCart = newCart.filter((v) => !v.checked);
    //         wx.setStorageSync("cart", newCart);
    //         wx.showToast({
    //           title: "支付成功",
    //         });
    //         // 我已购买

    //         // 我已购买
    //         //上传收货地址
    //         const address = wx.getStorageSync("address");
    //         let that = this;
    //         const db = wx.cloud.database();
    //         db.collection("address").add({
    //           data: {
    //             address: address,
    //             cart: cart2,
    //             // 可选自定义 _id，不填数据库会自动分配//这里填上传的内容
    //           },

    //           success: function (res) {
    //             // res 中有 _id 字段标记刚创建的记录的 id，

    //             console.log(res);

    //             that.setData({ res }); //在data中新建res保存结果
    //           },
    //         });
    //         //上传完毕

    //         wx.navigateTo({
    //           url: "/pages/order/index",
    //         });
    //       },

    //       fail: (err) => {
    //         console.log(err);
    //       },
    //     });
    //   },
    // });
    //php发起支付功能
    const openid = wx.getStorageSync("openid");
    wx.request({
      url: "http://www.dubai7794.xyz/payfee.php", //换成自己的请求地址
      // url: app.globalData.requestur3 + 'wxpay/Pay.php',

      data: {
        id: openid, //获取用户 openid
        fee: 0.01, //价格
        //this.data.totalprice * 100
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "post",
      success: function (res) {
        var key = "shixiongnuannuan2010082020100820";
        console.log(res.data);
        console.log("调起支付");
        wx.requestPayment({
          timeStamp: res.data.timeStamp,
          nonceStr: res.data.nonceStr,
          package: res.data.package,
          signType: res.data.signType,
          paySign: res.data.paySign,
          success: function (res) {
            //修改购物车内容
            let cart2 = wx.getStorageSync("cart") || [];
            console.log(cart2);
            const address = wx.getStorageSync("address");
            wx.setStorageSync("cart2", cart2);
            let newCart = wx.getStorageSync("cart");
            newCart = newCart.filter((v) => !v.checked);
            wx.setStorageSync("cart", newCart);
            console.log("success");
            console.log(res);
            wx.request({
              url: "http://www.dubai7794.xyz/thePostTOSQL.php",
              data: {
                address: JSON.stringify(address),
                cart: JSON.stringify(cart2),
                theopenid: JSON.stringify(openid),
              },
              header: {
                "Content-Type":
                  "application/x-www-form-urlencoded;charset=utf-8",
              },
              method: "post",
              success: function (res) {
                console.log("回调完成");
              },
              fail: function (res) {
                console.log("回调失败");
              },
            });
            wx.showToast({
              title: "支付成功",
              icon: "success",
              duration: 3000,
            });
          },
          fail: function (res) {
            console.log(res);
          },
          complete: function (res) {
            console.log("complete");
            wx.navigateTo({
              url: "/pages/order/index",
            });
          },
        });
      },
      fail: function (res) {
        console.log(res.data);
      },
    });
  },
});
