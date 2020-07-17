import { request } from "../../request/index.js";
import { login } from "../../request/index.js";
Page({
  data: {},

  async handlegetinfo(e) {
    try {
      //1获取用户信息
      const { encryptedData, rawData, iv, signature } = e.detail;
      //2获取小程序登录成功后的code
      const { code } = await login();
      const loginparams = { encryptedData, rawData, iv, signature, code };
      //发送请求 获取用户token
      const res = await request({
        url: "https://api-hmugo-web.itheima.net/api/public/v1/users/wxlogin",
        data: loginparams,
        method: "post",
      });
      wx.setStorageSync("token", token);
      wx.navigateBack({
        delta: 1,
      });
    } catch (error) {
      console.log(error);
    }
  },
});
