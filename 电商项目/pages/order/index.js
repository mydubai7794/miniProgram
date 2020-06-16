// pages/cart/index.js
//微信支付
//  1选择企业账号
//    2企业账号的小程序后台 必须给 开发者 添加上白名单
const app = getApp();
import { showModal } from "../../request/index.js";
Page({
  data: {
    address: {},
    cart2: [],
    orders: [],
    totalprice: 0,
    totalnum: 0,
  },

  onShow() {
    const address = wx.getStorageSync("address");

    //1 获取缓存中的信息

    // 获取缓存中的购物车数据
    let cart2 = wx.getStorageSync("cart2") || [];

    //过滤后的购物车数组
    cart2 = cart2.filter((v) => v.checked);
    this.setData({
      address,
    });
    let totalprice = 0;
    let totalnum = 0;
    cart2.forEach((v) => {
      totalprice += v.num * v.goods_price;
      totalnum += v.num;
    });

    this.setData({
      cart2,
      totalprice,
      totalnum,

      address,
    });
  },
});
