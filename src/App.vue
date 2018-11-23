<template>
  <section>
    <form-component></form-component>
    <table-component></table-component>
  </section>
</template>
<script>
import TableComponent from './components/Table.vue';
import FormComponent from './components/Form.vue';

export default {
  name: 'app',
  components: {
    TableComponent,
    FormComponent,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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