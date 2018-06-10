<template>
<div class="auth">
 <div class="loader">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
 </div>
 </div>
</template>
<script>
import api from "@/api/front.js";
import localDb from '@/utils/localDb'
export default {
  mounted() {
    let self = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(pos) {
        let x = pos.coords.longitude; //得到经度
        let y = pos.coords.latitude; //得到纬度
        api.getLocation({ x, y }).then(ret => {
          localDb.set("cityInfo",ret.data);
          self.$router.push({ name: "home", params: { id: ret.data } });
        });
      });
    }
  }
};
</script>

<style lang="scss">
.auth{
  min-height:540px;
}
.loader {
  position: absolute;
  top: 50%;
  left: 40%;
  margin-left: 10%;
  transform: translate3d(-50%, -50%, 0);
}
.dot {
  width: 24px;
  height: 24px;
  background: #3ac;
  border-radius: 100%;
  display: inline-block;
  animation: slide 1s infinite;
}
.dot:nth-child(1) {
  animation-delay: 0.1s;
  background: #32aacc;
}
.dot:nth-child(2) {
  animation-delay: 0.2s;
  background: #64aacc;
}
.dot:nth-child(3) {
  animation-delay: 0.3s;
  background: #96aacc;
}
.dot:nth-child(4) {
  animation-delay: 0.4s;
  background: #c8aacc;
}
.dot:nth-child(5) {
  animation-delay: 0.5s;
  background: #faaacc;
}
@-moz-keyframes slide {
  0% {
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
@-webkit-keyframes slide {
  0% {
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
@-o-keyframes slide {
  0% {
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes slide {
  0% {
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
