<template>
  <div id="app">
    <Navigator />
    <b-container fluid>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import Navigator from "./components/Navigator.vue";
export default {
  name: "App",
  components: {
    Navigator
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
