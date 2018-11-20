<template>
  <form
    class="form-container"
    @submit.prevent="submitForm"
    @reset.prevent="resetForm"
    id="test-form"
  >
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Name</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input
            class="input"
            type="text"
            placeholder="First Name"
            v-model.lazy.trim="obj.first_name"
            name="obj.first_name"
            autocomplete="off"
          >
        </div>
        <div class="field">
          <input
            class="input"
            type="text"
            placeholder="Last Name"
            v-model.lazy.trim="obj.last_name"
            name="obj.last_name"
            autocomplete="off"
          >
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Email</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input
            class="input"
            type="email"
            placeholder="First Name"
            v-model="obj.email"
            name="obj.email"
            required
            autocomplete="off"
          >
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Job</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input
            class="input"
            type="text"
            placeholder="First Name"
            v-model="obj.job"
            name="obj.job"
            autocomplete="off"
          >
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Phone</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input
            class="input"
            type="text"
            placeholder="First Name"
            v-model="obj.phone"
            name="obj.phone"
            autocomplete="off"
          >
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label">
        <label class="label">Gender</label>
      </div>
      <div class="field-body">
        <div class="field is-narrow">
          <div class="control">
            <label class="radio">
              <input type="radio" value="M" v-model="obj.gender" name="obj.gender">
              Male
            </label>
            <label class="radio">
              <input type="radio" value="F" v-model="obj.gender" name="obj.gender">
              Female
            </label>
            <label class="radio">
              <input type="radio" value="U" v-model="obj.gender" name="obj.gender">
              Unknow
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label">
        <label class="label">Active</label>
      </div>
      <div class="field-body">
        <div class="field">
          <label class="checkbox">
            <input type="checkbox" v-model="obj.is_active" name="obj.is_active">
            True/False
          </label>
        </div>
      </div>
    </div>
    <div class="model-info">
      <p v-for="(value, key) in obj" :key="key">{{ value }}</p>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <button class="button is-primary" type="submit">Submit</button>
      </div>
      <div class="control">
        <button class="button" type="reset">Cancel</button>
      </div>
    </div>
  </form>
</template>

<script>
import _ from 'lodash';
import Pristine from 'pristinejs';

const axios = require('axios');

export default {
  name: 'FormVue',
  props: {},
  data() {
    return {
      obj: {},
      pristine: null,
    };
  },
  methods: {
    fetchUsers() {
      const self = this;
      axios
        .get('https://api.myjson.com/bins/aoc7y')
        .then((response) => {
          self.obj = response.data;
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .then(() => {
          // always executed
        });
    },
    submitForm() {
      if (this.pristine.validate()) {
        console.log(this.obj);
      }
    },
    resetForm(event) {
      this.obj = {};
      console.log(this.obj);
    },
  },
  mounted() {
    const form = document.getElementById('test-form');
    this.pristine = new Pristine(
      form,
      {
        // class of the parent element where the error/success class is added
        classTo: 'field',
        errorClass: 'has-danger',
        successClass: 'has-success',
        // class of the parent element where error text element is appended
        errorTextParent: 'field',
        // type of element to create for the error text
        errorTextTag: 'p',
        // class of the error text element
        errorTextClass: 'help is-danger',
      },
      true,
    );
    this.fetchUsers();
  },
};
</script>

<style lang="sass">
@import "bulma/sass/utilities/_all.sass"
@import "bulma/sass/base/_all.sass"
@import "bulma/sass/elements/_all.sass"
input, select, button, textarea
  box-shadow: none !important
.form-container
  height: 1000px
  width: 800px
  padding: 20px
.has-danger
  input, select, textarea
    border-color: $danger !important
</style>
