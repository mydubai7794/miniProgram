// pages/cart/index.js
import { showModal } from "../../request/index.js";
Page({
  /**
   * 页面的初始数据
   */

  data: {
    address: {},
    cart: [],
    allchecked: false,
    totalprice: 0,
    totalnum: 0,
  },
  // 1点击 收货地址
  //    2调用api 获取用户地址
  //    3用户授予权限
  //     1点击确定 scope 值为true   直接调用获取收货地址
  //    2点击取消  scope为 false   诱导用户 自己打开 授权管理界面 当用户重新给与用户权限
  //    3从未点击获取地址  值为undefined 直接调用获取收货地址

  //2页面加载完毕
  //  获取本地存储数据地址
  //  把数据设置给data中的变量

  onShow() {
    //1 获取缓存中的信息
    const address = wx.getStorageSync("address");
    // 获取缓存中的购物车数据
    const cart = wx.getStorageSync("cart") || [];
    this.setData({
      address,
    });
    this.setcart(cart);
  },

  handlechoseadd() {
    //1获取权限状态
    wx.getSetting({
      success: (result) => {
        //获取状态
        const scopeAddress = result.authSetting["scope.address"];
        if (scopeAddress === true || scopeAddress === undefined) {
          wx.chooseAddress({
            success: (result1) => {
              console.log(result1);
              wx.setStorageSync("address", result1);
            },
          });
        } else {
          //用户 以前拒绝过授权 先诱导 打开授权界面
          wx.openSetting({
            success: (result2) => {
              wx.chooseAddress({
                success: (result3) => {
                  console.log(result3);
                  wx.setStorageSync("address", result3);
                },
              });
            },
          });
        }
      },
    });
  },
  //商品选中
  handlechange(e) {
    //1获取被修改的商品id
    const goods_id = e.currentTarget.dataset.id;
    //2获取购物车数组
    let { cart } = this.data;
    //3找到被修改的商品对象
    let index = cart.findIndex((v) => v.goods_id === goods_id);
    //选中状态取反
    cart[index].checked = !cart[index].checked;
    // 把数据 放到data和缓存中
    this.setcart(cart);
  },
  //设置购物车状态 重新 计算 底部工具栏的数据 全选 总价格 购买的数量
  setcart(cart) {
    // 计算全选
    //    every 数组方法 会便利 会 接受一个回调函数 那么  每一个回调函数都会true
    let allchecked = true;

    //总价格 总数量
    let totalprice = 0;
    let totalnum = 0;
    cart.forEach((v) => {
      if (v.checked) {
        totalprice += v.num * v.goods_price;
        totalnum += v.num;
      } else {
        allchecked = false;
      }
    });
    allchecked = cart.length != 0 ? allchecked : false;
    this.setData({
      cart,
      totalprice,
      totalnum,
      allchecked,
    });

    wx.setStorageSync("cart", cart);
  },
  // 商品全选
  handleitemcheck() {
    // 1获取data中的数据
    let { cart, allchecked } = this.data;
    allchecked = !allchecked;
    cart.forEach((v) => (v.checked = allchecked));
    this.setcart(cart);
  },
  async handleitemnum(e) {
    //传递获取参数
    const { operation, id } = e.currentTarget.dataset;
    //获取购物车数组
    let { cart } = this.data;
    //找到需要修改的商品索引
    const index = cart.findIndex((v) => v.goods_id === id);
    //判断是否要执行删除
    if (cart[index].num === 1 && operation === -1) {
      //弹窗提示

      const res = await showModal({ content: "您是否要删除?" });
      if (res.confirm) {
        cart.splice(index, 1);
        this.setcart(cart);
        console.log(6);
      }
    } else {
      //进行修改数量
      cart[index].num += operation;
      //设置缓存和data中
      this.setcart(cart);
    }
  },
  handlepay() {
    //判断收获地址
    const { address, totalnum } = this.data;
    if (!address.userName) {
      wx.showToast({
        title: "您还未选择收货地址",
        icon: "none",
        image: "",
        duration: 1500,
        mask: false,
      });
      return;
    }
    if (totalnum === 0) {
      wx.showModal({
        title: "提示",
        content: "您还未选中商品",

        success: (result) => {
          if (result.confirm) {
          } else if (result.cancel) {
            console.log("用户点击取消");
          }
        },
      });
      return;
    }
    wx.navigateTo({
      url: "/pages/pay/index",
    });
  },
});
