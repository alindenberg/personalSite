<template>
  <b-row class="home justify-content-center align-items-center">
    <b-col sm="8">
      <img src="../assets/95_finishing.JPG" alt="Good Feels" />
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
  max-height: 50%;
  max-width: 50%;
  margin: auto;
  display: block;
  border-radius: 5%;
}
#rebooting {
  max-width: 200px;
  margin: auto;
  font-size: 2.5em;
  padding-top: 12px;
}
</style>
