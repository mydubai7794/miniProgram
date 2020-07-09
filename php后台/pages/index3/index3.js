// pages/index3/index3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
pay(){
  const openid = wx.getStorageSync("openid");
  wx.request({
    url: 'http://www.dubai7794.xyz/payfee.php',  //换成自己的请求地址
    // url: app.globalData.requestur3 + 'wxpay/Pay.php',

    data: {
      id: openid,//获取用户 openid
      fee: 0.01, //价格
    
    },
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'post',
    success: function (res) {
      var key = 'shixiongnuannuan2010082020100820';
      console.log(res.data);
      console.log('调起支付');
      wx.requestPayment({
        'timeStamp': res.data.timeStamp,
        'nonceStr': res.data.nonceStr,
        'package': res.data.package,
        'signType': res.data.signType,
        'paySign': res.data.paySign,
        'success': function (res) {
          console.log('success');
          console.log(res);
          wx.showToast({
            title: '支付成功',
            icon: 'success',
            duration: 3000
          });
        },
        'fail': function (res) {
          console.log(res);
        },
        'complete': function (res) {
          console.log('complete');
          
        }
      });
    },
    fail: function (res) {
      console.log(res.data)
    }
  })

}
  
})