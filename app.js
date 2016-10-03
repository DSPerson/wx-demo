
/**************************************************** 仅供参考!不要盗取他人果实 *************************************************************/
wx.getSystemInfo({
  success: function(res) {
    // console.log(res.model)
    // console.log(res.pixelRatio)
    // console.log(res.windowWidth)
    // console.log(res.windowHeight)
    // console.log(res.language)
    // console.log(res.version)
    window.windowWidth = res.windowWidth;
    window.windowHeight = res.windowHeight; 
  }
})