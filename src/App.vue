<template>
  <section>
    <router-link to="/table">Go to Table</router-link>
    <router-link to="/form">Go to Form</router-link>
    <router-view></router-view>
  </section>
</template>
<script>
export default {
  name: 'app'
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style lang="sass">
@import "styles/common-style.sass"
@import "bulma/sass/elements/table.sass"
@import "bulma/sass/elements/form.sass"
@import "bulma/sass/elements/button.sass"
</style>