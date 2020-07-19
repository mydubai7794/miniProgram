import { request } from "../../request/index.js";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgData: [
      "https://www.dubai7794.xyz/pic/fan1.jpg",
      "https://www.dubai7794.xyz/pic/fan2.jpg",
      "https://www.dubai7794.xyz/pic/fan3.jpg",
      "https://www.dubai7794.xyz/pic/fan4.jpg",
      "https://www.dubai7794.xyz/pic/fan5.jpg",
      "https://www.dubai7794.xyz/pic/fan6.jpg",
    ],
    // imgData: [
    //     "/images/6.jpg",
    //     "/images/7.jpg",
    //     "/images/8.jpg"
    // ],
    height: 0,
    //上面是图片的处理
    currentSelectTripType: "bai",
    Goods_price: 69,
    iscollect: {},
    goodsOBJ: {},
    imgList: [
      {
        image_src: "https://www.dubai7794.xyz/pic/fan1.jpg",
        goods_id: 1,
      },

      {
        image_src: "https://www.dubai7794.xyz/pic/fan2.jpg",
        goods_id: 2,
      },
      {
        image_src: "https://www.dubai7794.xyz/pic/fan3.jpg",
        goods_id: 3,
      },
      {
        image_src: "https://www.dubai7794.xyz/pic/fan4.jpg",
        goods_id: 3,
      },
      {
        image_src: "https://www.dubai7794.xyz/pic/fan5.jpg",
        goods_id: 3,
      },
      {
        image_src: "https://www.dubai7794.xyz/pic/fan6.jpg",
        goods_id: 3,
      },
    ],
  },
  // 商品对象 所有数据在这里改就可以了
  GoodsInfo: {
    num: 0,
    checked: false,
    goods_price: 69,
    goods_name: "挂脖小风扇",
    goods_id: 191711,
    goods_small_logo: "https://www.dubai7794.xyz/pic/fan1.jpg", //改
    url_index: 2,
  },
  cart3: {
    num: 1,
    checked: false,
    goods_price: 69,
    goods_name: "挂脖小风扇",
    goods_id: 191711,
  },

  onShow: function () {
    let pages = getCurrentPages();
    let currentPage = pages[pages.length - 1];
    let options = currentPage.options;

    let collect = wx.getStorageSync("collect") || [];
    let iscollect = collect.some((v) => v.goods_id === this.GoodsInfo.goods_id);
    this.setData({
      iscollect,
    });
  },
  handlepreview(e) {
    const current = e.currentTarget.dataset.url;
    wx.previewImage({
      current,
      urls: [
        "https://www.dubai7794.xyz/pic/fan1.jpg",
        "https://www.dubai7794.xyz/pic/fan2.jpg",
        "https://www.dubai7794.xyz/pic/fan3.jpg",
      ],
    });
  },
  //点击加入购物车
  handlecar() {
    // 获取缓存中的购物车数组
    let cart = wx.getStorageSync("cart") || [];
    console.log(cart);
    // 判断 商品对象是否存在于购物车中
    let index = cart.findIndex((v) => v.goods_id === this.GoodsInfo.goods_id);
    if (index === -1) {
      // 不存在 第一次添加
      this.GoodsInfo.num = 1;
      this.GoodsInfo.checked = true;
      cart.push(this.GoodsInfo);
    } else {
      // 已经存在购物车数据 num++
      cart[index].num++;
    }
    // 已经存在购物车 重新添加到缓存中
    wx.setStorageSync("cart", cart);
    // 弹窗提示
    wx.showToast({
      title: "加入成功",
      icon: "success",
      //防止用户手抖 疯狂地及
      mask: true,
    });
  },
  pay() {
    let cart = wx.getStorageSync("cart") || [];
    console.log(cart);
    // 判断 商品对象是否存在于购物车中
    let index = cart.findIndex((v) => v.goods_id === this.GoodsInfo.goods_id);
    if (index === -1) {
      // 不存在 第一次添加
      this.GoodsInfo.num = 1;
      this.GoodsInfo.checked = true;
      cart.push(this.GoodsInfo);
    } else {
      // 已经存在购物车数据 num++
      cart[index].num++;
    }
    // 已经存在购物车 重新添加到缓存中
    wx.setStorageSync("cart", cart);
    // 弹窗提示
    wx.switchTab({
      url: "/pages/cart/index",
    });
  },
  //点击商品收藏
  handleicon() {
    let iscollect = false;
    // 获取缓存中的商品数组
    let collect = wx.getStorageSync("collect") || [];
    //判断是否被收藏过

    let index = collect.findIndex(
      (v) => v.goods_id === this.GoodsInfo.goods_id
    );
    //当index ！= -1 收藏过了 取消收藏
    if (index !== -1) {
      //能找到 在数组中删除
      collect.splice(index, 1);
      iscollect = false;
      wx.showToast({
        title: "取消成功",
        icon: "success",
        mask: true,
      });
    } else {
      collect.push(this.GoodsInfo);
      iscollect = true;
      wx.showToast({
        title: "收藏成功",
        icon: "success",
        mask: true,
      });
    }
    //存入缓存
    wx.setStorageSync("collect", collect);
    this.setData({
      iscollect,
    });
    //修改data属性
  },
  selectedbai: function (e) {
    this.setData({
      currentSelectTripType: e.currentTarget.dataset.id,
      Goods_price: 69,
    });
    this.GoodsInfo.goods_name = "挂脖小风扇（樱花粉）";
    this.GoodsInfo.goods_price = 69;
    this.cart3.goods_name = "挂脖小风扇（樱花粉）";
    this.cart3.goods_price = 69;
    (this.GoodsInfo.goods_small_logo =
      "https://www.dubai7794.xyz/pic/fan_logo_1.jpg"),
      (this.GoodsInfo.goods_id = 191711);
  },
  selectedfen: function (e) {
    this.setData({
      currentSelectTripType: e.currentTarget.dataset.id,
      Goods_price: 69,
    });
    this.GoodsInfo.goods_name = "挂脖小风扇（炫酷黑）";
    this.GoodsInfo.goods_price = 69;
    this.cart3.goods_name = "挂脖小风扇（炫酷黑）";
    this.cart3.goods_price = 69;
    this.GoodsInfo.goods_id = 191712;
    this.GoodsInfo.goods_small_logo =
      "https://www.dubai7794.xyz/pic/fan_logo_2.jpg";
  },
  selectedlv: function (e) {
    this.setData({
      currentSelectTripType: e.currentTarget.dataset.id,
      Goods_price: 135,
    });
    this.GoodsInfo.goods_name = "挂脖小风扇（情侣套装）";
    this.GoodsInfo.goods_price = 135;
    this.cart3.goods_name = "挂脖小风扇（情侣套装）";
    this.cart3.goods_price = 135;
    this.GoodsInfo.goods_small_logo =
      "https://www.dubai7794.xyz/pic/fan_logo_3.jpg";

    this.GoodsInfo.goods_id = 191713;
  },
  setContainerHeight: function (e) {
    //图片的原始宽度
    var imgWidth = e.detail.width;

    //图片的原始高度
    var imgHeight = e.detail.height;

    //同步获取设备宽度
    var sysInfo = wx.getSystemInfoSync();
    console.log("sysInfo:", sysInfo);

    //获取屏幕的宽度
    var screenWidth = sysInfo.screenWidth;

    //获取屏幕和原图的比例
    var scale = screenWidth / imgWidth;

    //设置容器的高度
    this.setData({
      height: imgHeight * scale,
    });
    console.log(this.data.height);
  },
});
