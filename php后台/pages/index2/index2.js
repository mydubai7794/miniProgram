// pages/index2/index2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
 pay(){
wx.request({
  url:'http://127.0.0.1:8080/Ajax(wamp%ef%bc%89/phpclass.php',//改成你自己的链接
  header:{
  'Content-Type':'application/x-www-form-urlencoded'
  },
  method:'POST',
  success:function(res){
  console.log(res.data);
  console.log('调起支付');
  wx.requestPayment({
  'timeStamp': res.data.timeStamp,
  'nonceStr': res.data.nonceStr,
  'package': res.data.package,
  'signType':'MD5',
  'paySign': res.data.paySign,
  'success':function(res){
  console.log('success');
  wx.showToast({
  title:'支付成功',
  icon:'success',
  duration:3000
  });
  },
  'fail':function(res){
  console.log('fail');
  },
  'complete':function(res){
  console.log('complete');
  }
  });
  },
  fail:function(res){
  console.log(res.data)
  }
  });
 }
})