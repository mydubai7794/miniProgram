//app.js
const app = getApp();

App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error("请使用 2.2.3 或以上的基础库以使用云能力");
    } else {
      wx.cloud.init({
        env: "l-xuanda-t15li",
        traceUser: true,
      });
    }
    const db = wx.cloud.database({
      env: "l-xuanda-t15li",
    });
    this.globalData = {
      orders: [
        {
          price: "0",
          number: "0",
          currentdate: "0",
        },
      ],
    };
    //数据库    /**
    //  * 打开小程序的时候首先获得用户openid
    //  */
    // wx.cloud.callFunction({
    //   name: "login",
    //   data: {},
    //   success: (res) => {
    //     this.globalData.openid = res.result.openid;
    //   },
    //   fail: (err) => {
    //     console.error("[云函数] [login] 调用失败", err);
    //   },
    // });
    //获取openid

    //数据库
    //php获取openid
    wx.login({
      //获取code
      success: function (res) {
        var code = res.code; //返回code
        console.log(code);
        var appId = "wx49aa51af977f341f";
        var secret = "61555c930154136b5fd1f14af046bd91";
        wx.request({
          url:
            "https://api.weixin.qq.com/sns/jscode2session?appid=" +
            appId +
            "&secret=" +
            secret +
            "&js_code=" +
            code +
            "&grant_type=authorization_code",
          data: {},
          header: {
            "content-type": "json",
          },
          success: function (res) {
            console.log(res.data);
            console.log(res.data.openid);
            wx.setStorageSync("session", res.data.session_key);
            wx.setStorageSync("openid", res.data.openid);

            var openid = res.data.openid; //返回openid
            console.log("openid为" + openid);
          },
        });
      },
    });
  },
});
