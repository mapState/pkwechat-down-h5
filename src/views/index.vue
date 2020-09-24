<template>
  <div class="main">
    <img src="../../static/img/bg.png" alt class="bgImg" />
    <img src="../../static/img/logo.png" alt class="logoImg" />
    <img src="../../static/img/phone.png" alt class="phoneImg" />
    <span class="copyText" v-clipboard:copy="me" 
            v-clipboard:success="onCopy" 
            v-clipboard:error="onError">复制链接浏览器打开</span>
    <div class="btn" @click="downApp(1)">安卓下载</div>
    <div class="btn" @click="downApp(0)">iOS下载</div>
  </div>
</template>
<script>
let timer = null;
export default {
  name: "Home",
  data() {
    return {
      me:'https://pike8.top/download',
      url:'https://pike8.top/app-release.apk',
      openUrl:'foin://com.pk.video/open',
      appStore:'https://apps.apple.com/cn/app/%E5%AA%B2%E5%AE%A2%E7%9F%AD%E8%A7%86%E9%A2%91/id1493044858'
    };
  },
  mounted() {
    this.openTuer();
  },
  methods: {
    onCopy(e) {
      this.$toast('复制成功')
    },
    onError(e) {
        console.log("复制失败！");
    },
    downApp(type){
      if(type==0){
        window.location = this.appStore
        // window.location.href = this.appStore
      }else{
        window.location.href = this.url
      }
    },
    downLoad(){
        !document.webkitHidden &&
                  !document.hidden &&
                  void (location.href = this.url);
    },
    openTuer() {
      if (this.isBlackApp()) {
        // 头部APP让网页显示提示在浏览器中打开
        this.$toast('请复制网址到手机浏览器打开')
      } else {
        // 不是头部APP就直接打开
        this.openApp();
      }
    },
    openApp() {
      //这里需要有个安卓和ios平台的判断分别取不同的SchemeURL
      this.jumpApp(this.openUrl); //此函数负责打开APP的,scheme协议地址由安卓端跟ios端提供
      this.noApp(); //此函数负责如果没有打开APP或没有安装APP时跳转的地址处理
    },
    isBlackApp() {
      var u = navigator.userAgent.toLowerCase();
      return (
        /micromessenger/i.test(u) ||
        u.indexOf("weibo") > -1 ||
        u.indexOf("qq") > -1 ||
        u.indexOf("mqqbrowser") > -1
      );
    },
    jumpApp(t) {
      try {
        var e = navigator.userAgent.toLowerCase(),
          n = e.match(/cpu iphone os (.*?) like mac os/);
        if (
          ((n = null !== n ? n[1].replace(/_/g, ".") : 0), parseInt(n) >= 9)
        ) {
          window.location.href = t;
        } else {
          var r = document.createElement("iframe");
          (r.src = t), (r.style.display = "none"), document.body.appendChild(r);
        }
      } catch (e) {
        window.location.href = t;
      }
    },
    noApp() {
      //这里需要有个安卓和ios平台的判断分别取不同的下载地址
      var u = navigator.userAgent,
        app = navigator.appVersion;
      //var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1;
      var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      if (isIOS) {
        window.location.href = this.appStore
      }else{
          var t = Date.now(),
          r = this.appStore;
          timer = setTimeout(function() {
            return Date.now() - t > 2200
              ? (clearTimeout(timer), !1)
              : !document.webkitHidden &&
                  !document.hidden &&
                  void (location.href = r);
          }, 2000);
      }
    }
  }
};
</script>
<style scoped>
.main {
  /* background: url("../../static/img/bg.png");
  background-size: 100% 100%;
  height: 100%;
  position: fixed; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bgImg{
  position:fixed;
  width:100%;
  height: 100%;
  z-index: -2;
  left:0;
  top:0;
}
.logoImg {
  width: 193px;
  height: 175px;
  margin-top: 30px;
  margin-bottom: 48px;
}
.phoneImg{
  width:327px;
  height:352px;
  margin-bottom:30px;
}
.copyText{
  text-align: center;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #FFFFFF;
  margin-bottom:40px;
}
.btn{
  width: 290px;
  height: 39px;
  background: #FFD99C;
  border-radius: 20px;
  text-align: center;
  line-height: 39px;
  margin-bottom: 15px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #F85C25;
}
</style>>

