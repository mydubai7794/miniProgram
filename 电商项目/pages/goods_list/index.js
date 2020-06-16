import { request } from "../../request/index.js";
// import regeneratorRuntime from "../../lib/runtime/tuntime";
//用户上划 加载数据
//   1.找到触底数据
//    2。判断还有没有下一页数据
//            获取到总页数
//            获取当前页面
//            当前页码大于等于zong页数
//            总页数=Match.ceil（总条数/页面容量）
//   3.没有就弹出提示
//    4.有就刷新
//           发送当前的页码++
//           重新发送请求
//           数据请求回来 对data中的代码进行拼接

//用户下来进行刷新
//    1.出发下来刷新界面  需要在json配置项
//    2.重置数据数组
//    3.重置页面 设置为1

Page({
  data: {
    tabs: [
      {
        id: 0,
        value: "综合",
        isActive: true,
      },
      {
        id: 1,
        value: "销量",
        isActive: false,
      },
      {
        id: 2,
        value: "价格",
        isActive: false,
      },
    ],
    goods_list: [],
  },

  QueryParams: {
    query: "",
    cid: "",
    pagenum: 1,
    pagesize: 10,
  },
  totalpages: 1,
  onLoad: function (options) {
    this.QueryParams.cid = options.cid;
    this.getgoodslist();
  },

  //获取商品列表数据
  async getgoodslist() {
    const res = await request({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/goods/search",
      data: this.QueryParams,
    });
    const total = res.total;
    this.totalpages = Math.ceil(total / this.QueryParams.pagesize);
    // console.log(this.totalpages);

    this.setData({
      goods_list: [...this.data.goods_list, ...res.goods],
    });

    //关闭下拉刷新页面效果
    wx.stopPullDownRefresh();
  },

  //标题点击事件 从子组件传递过来
  handlebindtabsItemChange(e) {
    //1 获取被点击的标题索引
    const { index } = e.detail;
    //2修改源数组
    let { tabs } = this.data;
    tabs.forEach((v, i) =>
      i === index ? (v.isActive = true) : (v.isActive = false)
    );
    //3赋值到DATA中
    this.setData({
      tabs,
    });
  },
  onReachBottom() {
    // console.log("yemian");
    // 判断还有没有下一页
    if (this.QueryParams.pagenum >= this.totalpages) {
      // 没有下一页
      console.log("无");
    } else {
      this.QueryParams.pagenum++;
      this.getgoodslist();
    }
  },
  onPullDownRefresh() {
    //重置数组
    this.setData({
      goods_list: [],
    });
    //。。重重页码
    this.QueryParams.pagenum = 1;
    //发送请求
    this.getgoodslist();
  },
});
