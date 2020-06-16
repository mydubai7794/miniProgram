import { request } from "../../request/index.js";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    iscollect: {},
    goodsOBJ: {},
    imgList: [
      "cloud://l-xuanda-t15li.6c2d-l-xuanda-t15li-1302375241/good2.png",
    ],
  },
  // 商品对象 所有数据在这里改就可以了
  GoodsInfo: {
    num: 0,
    checked: false,
    goods_price: 13,
    goods_name: "珍珠奶茶2",
    goods_id: 13,
    goods_small_logo:
      "cloud://l-xuanda-t15li.6c2d-l-xuanda-t15li-1302375241/good2.png",
  },
  cart3: {
    num: 1,
    goods_price: 13,
    goods_name: "珍珠奶茶2",
    goods_id: 13,
  },
  /**
   * 生命周期函数--监听页面加载
   */
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
    // 1先构造要预览的的图片数组

    // const urls = this.GoodsInfo.pics.map((v) => v.pics_mid);
    // .传递过来的url
    const current = e.currentTarget.dataset.url;
    wx.previewImage({
      current,
      urls: this.data.imgList,
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
});
