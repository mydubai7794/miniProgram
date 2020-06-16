const app = getApp();
Page({
  data: {
    //轮播图
    swiperlist: [],
    //导航数组
    cateslist: [],
    // 楼层数据
    floorlist: [],

    swiperlist: [
      {
        goods_id: 10,
        image_src:
          "cloud://l-xuanda-t15li.6c2d-l-xuanda-t15li-1302375241/good1.png",
        navigator_url: "/pages/goods_detail/index",
        open_type: "navigate",
      },
      {
        goods_id: 13,
        image_src:
          "cloud://l-xuanda-t15li.6c2d-l-xuanda-t15li-1302375241/good2.png",
        navigator_url: "/pages/goods_detail2/index",
        open_type: "navigate",
      },
      {
        goods_id: 15,
        image_src:
          "cloud://l-xuanda-t15li.6c2d-l-xuanda-t15li-1302375241/goods3.png",
        navigator_url: "/pages/goods_detail3/index",
        open_type: "navigate",
      },
    ],
  },
  //options(Object)
  onLoad: function (options) {
    //发送异步请求获取轮播图数据
    // this.getswiperlist();
  },

  //获取轮播图
  // getswiperlist() {
  //   // wx.showLoading({
  //   //   title: "加载中",
  //   //   mask: true,
  //   // });
  //   wx.request({
  //     url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata",
  //     success: (result) => {
  //       this.setData({
  //         swiperlist: result.data.message,
  //       });
  //       console.log(result.data.message);
  //     },
  //   });
  // },
  //获取分类当行
  // getcateslist() {
  //   wx.request({
  //     url: "https://api-hmugo-web.itheima.net/api/public/v1/home/catitems",
  //     success: (result) => {
  //       this.setData({
  //         cateslist: result.data.message,
  //       });
  //     },
  //   });
  // },
  // getfloorlist() {
  //   wx.request({
  //     url: "https://api-hmugo-web.itheima.net/api/public/v1/home/floordata",
  //     success: (result) => {
  //       this.setData({
  //         floorlist: result.data.message,
  //       });
  //     },
  //     complete: () => {
  //       //关闭正在等待的图标
  //       wx.hideLoading();
  //     },
  //   });
  // },
  onReady: function () {},
  onShow: function () {
    app.globalData.test = this.data.swiperlist;
  },

  //item(index,pagePath,text)
  onTabItemTap: function (item) {},
});
