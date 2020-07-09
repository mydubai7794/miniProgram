//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);

    // 登录
    //根据code获取openid等信息
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

    // 获取用户信息
  },
  globalData: {
    userInfo: null,
  },
});
