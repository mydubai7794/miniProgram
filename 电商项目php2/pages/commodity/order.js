// pages/menu/menu.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    menuRightGoods: [
      {
        shopImg: "https://www.dubai7794.xyz/pic/yashua3.jpg",
        url_index: 1,
        name: "智能杀菌牙刷架",

        newPrice: "99.00",
      },
      {
        shopImg: "https://www.dubai7794.xyz/pic/fans_first.jpg",
        url_index: 2,
        name: "挂脖小风扇",

        newPrice: "69.00",
      },
      {
        shopImg: "https://www.dubai7794.xyz/pic/chong_first.jpg",
        url_index: 3,
        name: "宠物除臭剂",

        newPrice: "36.00",
      },
      {
        shopImg: "https://www.dubai7794.xyz/pic/kuaizi2.jpg",
        url_index: 4,
        name: "紫光筷子筒",

        newPrice: "169.00",
      },
    ],
    menuRightTitle: "所有商品",
    index: 1,
    curNav: 0,
    left_menus: [
      {
        menu_name: "所有商品",
        id: 0,
      },
      {
        menu_name: "商品分类1",
        id: 1,
      },
      {
        menu_name: "DE康企业店",
        id: 2,
      },
    ],
    oneIsShow: true,
  },
  //点击出现右边栏
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index),
      shopname = e.target.dataset.name;
    // 我这里数据写的是静态的，所以声明一个数组然后用switch重新赋值
    var newGoods = [];
    console.log(shopname);
    console.log(index);
    switch (index) {
      case 0:
        newGoods = [
          {
            shopImg: "https://www.dubai7794.xyz/pic/yashua3.jpg",
            url_index: 1,
            name: "智能杀菌牙刷架",

            newPrice: "99.00",
          },
          {
            shopImg: "https://www.dubai7794.xyz/pic/fans_first.jpg",
            url_index: 2,
            name: "挂脖小风扇",

            newPrice: "69.00",
          },
          {
            shopImg: "https://www.dubai7794.xyz/pic/chong_first.jpg",
            url_index: 3,
            name: "宠物除臭剂",

            newPrice: "36.00",
          },
          {
            shopImg: "https://www.dubai7794.xyz/pic/kuaizi2.jpg",
            url_index: 4,
            name: "紫光筷子筒",

            newPrice: "169.00",
          },
        ];
        break;
      case 1:
        newGoods = [
          {
            shopImg: "https://www.dubai7794.xyz/pic/kuaizi3.jpg",
            url_index: 1,
            name: "商品介绍",

            newPrice: "1",
          },
        ];
        break;
      case 2:
        newGoods = [
          {
            shopImg: "https://www.dubai7794.xyz/pic/yashua3.jpg",
            url_index: 1,
            name: "智能杀菌牙刷架",

            newPrice: "99.00",
          },
          {
            shopImg: "https://www.dubai7794.xyz/pic/fans_first.jpg",
            url_index: 2,
            name: "挂脖小风扇",

            newPrice: "69.00",
          },
          {
            shopImg: "https://www.dubai7794.xyz/pic/chong_first.jpg",
            url_index: 3,
            name: "宠物除臭剂",

            newPrice: "36.00",
          },
          {
            shopImg: "https://www.dubai7794.xyz/pic/kuaizi2.jpg",
            url_index: 4,
            name: "紫光筷子筒",

            newPrice: "169.00",
          },
        ];
        break;
    }
    // 把点击到的某一项，设为当前index
    this.setData({
      curNav: id, //设置当前点击项
      curIndex: index, //更改当前点击项下标为当前数组下标
      menuRightTitle: shopname, //设置右侧显示栏标题
      menuRightGoods: newGoods, //设置需要展示的商品
    });
  },
  handletap(e) {
    var url_page = e.currentTarget.dataset.page;

    wx.navigateTo({
      url: "/pages/goods_detail" + url_page + "/index", //页面路径
    });
  },
});
