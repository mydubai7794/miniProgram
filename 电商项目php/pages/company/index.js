const innerAudioContext = wx.createInnerAudioContext();
Page({
  onLoad: function (e) {
    this.data.index = 0;
    this.data.theStatus = 0;
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    // this.audioCtx = wx.createAudioContext("myAudio");
  },
  data: {
    index: 0,
    theStatus: 0,
  },

  handlemusicOne: function (e) {
    innerAudioContext.src = 
    "https://www.dubai7794.xyz/music/%E6%B2%89%E9%86%89%E4%BA%8E%E9%A3%8E%E4%B8%AD.mp3";
    if (0 == this.data.index) {
      innerAudioContext.play();
      this.setData({
        index: 1,
      });
    } else {
      innerAudioContext.pause();
      this.setData({
        index: 0,
      });
    }
  },
  handlemusicTwo: function (e) {
    innerAudioContext.src =
    "http://www.dubai7794.xyz/music/%E4%BD%A0%E7%9A%84%E9%85%92%E9%A6%86%E5%AF%B9%E6%88%91%E6%89%93%E4%BA%86%E7%83%8A.mp3";
    if (0 == this.data.theStatus) {
      innerAudioContext.play();
      this.setData({
        theStatus: 1,
      });
    } else {
      innerAudioContext.pause();
      this.setData({
        theStatus: 0,
      });
    }
  },
  handlenav: function (e) {
    wx.navigateTo({
      url: "../fresh-info1/index",
    });
  },

  audioPlay() {
    const innerAudioContext = wx.createInnerAudioContext()
innerAudioContext.autoplay = true
innerAudioContext.src = 'http://www.dubai7794.xyz/music/%E4%BD%A0%E7%9A%84%E9%85%92%E9%A6%86%E5%AF%B9%E6%88%91%E6%89%93%E4%BA%86%E7%83%8A.mp3'
innerAudioContext.onPlay(() => {
  console.log('开始播放')
})
innerAudioContext.onError((res) => {
  console.log(res.errMsg)
  console.log(res.errCode)
})
  },
  //   //点击播放,(如果要一进来就播放放到onload即可)
  //   handlemusic: function () {
  //     innerAudioContext.play();
  //   },
  //   //点击 停止
  //   stop: function () {
  //     innerAudioContext.pause();
  //   },
});
