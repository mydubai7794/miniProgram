// 云函数入口文件
const cloud = require("wx-server-sdk");

cloud.init();
//1引入支付的三方依赖
const tenpay = require("tenpay");
//2配置支付信息
const db = cloud.database();
const config = {
  appid: "wx49aa51af977f341f",
  mchid: "1586997491",
  partnerKey: "shixiongnuannuan2010082020100820",
  notify_url: "https://mp.weixin.qq.com",
  spbill_create_ip: "127.0.0.1", //这里填这个就可以
};

exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();
  let { total_fee } = event;
  //3，初始化支付
  const api = tenpay.init(config);
  const nonceStr = Math.random().toString(36).substr(2, 15);
  const timeStamp = parseInt(Date.now() / 1000) + "";
  const out_trade_no = "otn" + nonceStr + timeStamp;
  let result = await api.getPayParams({
    out_trade_no: out_trade_no,
    body: "牌位",
    total_fee: total_fee, //订单金额(分),
    openid: wxContext.OPENID, //付款用户的openid
  });
  return result;
};
