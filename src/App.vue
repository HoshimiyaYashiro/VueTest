<template>
  <FormVue></FormVue>
</template>

<script>
import TableVue from './components/Table.vue';
import FormVue from './components/Form.vue';

export default {
  name: 'app',
  components: {
    FormVue,
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
