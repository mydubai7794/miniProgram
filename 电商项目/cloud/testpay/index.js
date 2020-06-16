// 云函数入口文件
const cloud = require("wx-server-sdk");

cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV,
});

// 云函数入口函数
exports.main = async function (event, context) {
  let { totalFee } = event;

  const nonceStr = Math.random().toString(36).substr(2, 15);
  const timeStamp = parseInt(Date.now() / 1000) + "";
  const out_trade_no = "otn" + nonceStr + timeStamp;
  const res = await cloud.cloudPay.unifiedOrder({
    body: "测试",
    outTradeNo: out_trade_no,
    spbillCreateIp: "127.0.0.1",
    subMchId: "1586997491",
    subAppid: "wx49aa51af977f341f",
    totalFee: totalFee,
    envId: "l-xuanda-t15li",
    functionName: "payback",
  });

  return res;
};
