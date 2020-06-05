const innerAudioContext = wx.createInnerAudioContext(); 
 Page({ 
   onLoad: function (e) { 
    this.data.index = 0; 
    // 使用 wx.createAudioContext 获取 audio 上下文 context 
     // this.audioCtx = wx.createAudioContext("myAudio"); 
   }, 
   data: { index:0,
  }, 
  handlemusic: function (e) { 
     console.log(e); 
 if (0 == this.data.index) { 
       console.log(0); 
      innerAudioContext.play(); 
       this.setData({ 
         index: 1, 
       }); 
     } else { 
       console.log(1); 
 
 
       innerAudioContext.pause(); 
       this.setData({ 
         index: 0, 
       }); 
     } 
   }, 
  
   onShow: function () { 
     innerAudioContext.src = 
       "http://music.163.com/song/media/outer/url?id=1337883508.mp3"; 
       "http://music.163.com/song/media/outer/url?id=25640795.mp3";
     //音频的数据链接，用于直接播放。支持云文件ID（2.2.3起）。 
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
