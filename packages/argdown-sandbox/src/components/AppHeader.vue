<template>
  <header class="app-header">
    <img class="logo" src="../assets/argdown-mark.svg" alt="Argdown - argumentation analysis syntax">
    <span class="name">Argdown Sandbox</span>
    <!--<h1>{{ title }}</h1>-->
  </header>
</template>

<script>
export default {
  name: "app-header",
  data() {
    return {
      title: "Argdown Editor"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.logo {
  display: block;
  padding-right: 10px;
  width: 65px;
  height: auto;
}
h1 {
  font-size: 1.5em;
  padding: 0;
  margin: 0;
  color: #fff;
}
.name {
  color: #2c3e50;
  font-size: 1.2rem;
  font-weight: 600;
  font-weight: 500;
}
</style>
