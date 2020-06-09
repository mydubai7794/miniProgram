//app.js
const app = getApp();
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error("请使用 2.2.3 或以上的基础库以使用云能力");
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      });
    }
    // wx.login({
    //   success: (res) => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     // console.log(res)
    //     var appid = "wx49aa51af977f341f"; //填写微信小程序appid
    //     var secret = "4131169d1d735f94d4bc316e29301784"; //填写微信小程序secret

    //     //调用request请求api转换登录凭证
    //     wx.request({
    //       url:
    //         "https://api.weixin.qq.com/sns/jscode2session?appid=" +
    //         appid +
    //         "&secret=" +
    //         secret +
    //         "&grant_type=authorization_code&js_code=" +
    //         res.code,
    //       header: {
    //         "content-type": "application/json",
    //       },
    //       success: function (res) {
    //         console.log(res.data.openid); //获取openid
    //       },
    //     });
    //   },
    // });
    this.globalData = {};
    //数据库    /**
    //  * 打开小程序的时候首先获得用户openid
    //  */
    wx.cloud.callFunction({
      name: "login",
      data: {},
      success: (res) => {
        this.globalData.openid = res.result.openid;
        console.log(this.globalData.openid);
      },
      fail: (err) => {
        console.error("[云函数] [login] 调用失败", err);
      },
    });
    //获取openid
    const db = wx.cloud.database({
      env: "l-xuanda-t15li",
    });
    //数据库
  },
});
