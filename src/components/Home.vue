<template>
  <b-row class="home justify-content-center align-items-center">
    <b-col sm="8">
      <img class="rounded-circle" src="../assets/CartoonColombia.jpg" alt="Cartoon Me" />
      <p id="rebooting" class="text-nowrap">
        <span>
          Rebooting
          <span v-for="index in tickCount" :key="index">.</span>
        </span>
      </p>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      tickCount: setInterval(
        () => (this.tickCount = (this.tickCount + 1) % 5),
        700
      )
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  height: 90vh;
}
img {
  max-height: 450px;
  max-width: 450px;
  margin: auto;
  display: block;
}
#rebooting {
  max-width: 200px;
  margin: auto;
  font-size: 2.5em;
  padding-top: 12px;
}
</style>
