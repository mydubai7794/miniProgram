// 云函数入口文件
const cloud = require("wx-server-sdk");

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
});

// 云函数入口函数
exports.main = async (event, context) => {
  var date = new Date();
  var seperator1 = "-";
  var seperator2 = ":";
  var month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  var strDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  var currentdate =
    date.getFullYear() +
    seperator1 +
    month +
    seperator1 +
    strDate +
    " " +
    date.getHours() +
    seperator2 +
    date.getMinutes() +
    seperator2 +
    date.getSeconds();
  const wxContext = cloud.getWXContext();
  console.log("payment callback!", event);

  const number = event.outTradeNo;
  const openid = event.openId;
  const returnCode = event.returnCode;
  const price = 0.01;
  if(returnCode == 'SUCCESS'){
    const db = cloud.database()

  const result = { number, price, currentdate }; //需要返回的字段，不返回该字段则一直回调
  return  result;
  }
};
