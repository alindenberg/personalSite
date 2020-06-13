<template>
  <b-nav size="md" :text="getPathName()" class="custom-nav">
    <b-nav-item size="lg" to="/" :disabled="this.$route.path == '/'">Me</b-nav-item>
    <b-nav-item to="/writes" :disabled="this.$route.path == '/writes'">Writes</b-nav-item>
    <b-nav-item to="/reads" :disabled="this.$route.path == '/reads'">Reads</b-nav-item>
  </b-nav>
</template>

<script>
export default {
  name: "Navigator",
  data() {
    return {
      path: this.getPathName()
    };
  },
  methods: {
    getPathName() {
      const path = this.$route.path;
      switch (path) {
        case "/":
          return "Me";
        case "/writes":
          return "Writes";
        case "/reads":
          return "Reads";
      }
    }
  }
};
</script>

<style scoped>
</style>