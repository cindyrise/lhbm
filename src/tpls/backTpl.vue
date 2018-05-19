<template>
  	<div class="home_container">
         <div>{{msg}}</div>
          <router-view/>
    </div>
</template>

<script>
export default {
  name: "BackTpl",
  data() {
    return {
      msg: "Welcome to Your BackTpl !!!"
    };
  }
};
</script>

<style>
.home_container {
  font-size: 32px;
  color: blue;
}
</style>
