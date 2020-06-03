const innerAudioContext = wx.createInnerAudioContext();
Page({
  onReady: function (e) {
    this.index = 0;
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    // this.audioCtx = wx.createAudioContext("myAudio");
  },
  data: {
    index: 0,
    // poster:
    //   "http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000",
    // name: "此时此刻",
    // author: "许巍",
    // src: "http://music.163.com/song/media/outer/url?id=562598065.mp3",
  },

  handlemusic: function (e) {
    if (0 === this.index) {
      console.log(0);

      innerAudioContext.play();
      this.index = 1;
    } else {
      console.log(1);

      innerAudioContext.pause();
      this.index = 0;
    }
  },
  handlenav: function (e) {
    wx.navigateTo({
      url: "../fresh-info1/index",
    });
  },
  onShow: function () {
    innerAudioContext.src =
      "http://music.163.com/song/media/outer/url?id=562598065.mp3";
    //音频的数据链接，用于直接播放。支持云文件ID（2.2.3起）。
  },
});
