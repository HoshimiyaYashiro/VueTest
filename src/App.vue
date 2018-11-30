<template>
  <div id="app">
    <router-link v-if="loggedIn" to="/logout">Log out</router-link>
    <router-link to="/form">Form</router-link>
    <router-link to="/table">Table</router-link>
    <template v-if="$route.matched.length">
      <router-view></router-view>
    </template>
    <template v-else>
      <p>You are logged {{ loggedIn ? 'in' : 'out' }}</p>
    </template>
  </div>
</template>
<script>
import auth from './js/auth';

export default {
  name: 'app',
  data() {
    return {
      loggedIn: auth.loggedIn()
    }
  },
  created () {
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn;
    }
  }
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