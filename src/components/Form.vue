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
            v-model.trim="obj.first_name"
            name="obj.first_name"
            autocomplete="off"
            :class="{'is-danger': errors.has('obj.first_name') }"
            v-validate="'required|letter: '"
            data-vv-as="First Name"
          >
          <span
            v-if="errors.has('obj.first_name')"
            class="help is-danger"
          >{{ errors.first('obj.first_name') }}</span>
        </div>
        <div class="field">
          <input
            class="input"
            type="text"
            placeholder="Last Name"
            v-model.trim="obj.last_name"
            name="obj.last_name"
            :class="{'is-danger': errors.has('obj.last_name') }"
            v-validate="'required|letter: '"
            data-vv-as="Last Name"
            autocomplete="off"
          >
          <span
            v-if="errors.has('obj.last_name')"
            class="help is-danger"
          >{{ errors.first('obj.last_name') }}</span>
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
            v-model="obj.email"
            name="obj.email"
            :class="{'is-danger': errors.has('obj.email') }"
            data-vv-as="Email"
            v-validate="'required|email'"
            autocomplete="off"
            @keypress.32.prevent
          >
          <span
            v-if="errors.has('obj.email')"
            class="help is-danger"
          >{{ errors.first('obj.email') }}</span>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Birthday</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input
            class="input"
            type="text"
            v-model.trim="obj.birthday"
            name="obj.birthday"
            autocomplete="off"
            :class="{'is-danger': errors.has('obj.birthday') }"
            v-validate="'required|date_format:YYYY-MM-DD'"
            data-vv-as="Birthday"
          >
          <span
            v-if="errors.has('obj.birthday')"
            class="help is-danger"
          >{{ errors.first('obj.birthday') }}</span>
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
        <div class="flip-switch">
          <input
            type="checkbox"
            v-model="obj.is_active"
            name="obj.is_active"
            class="flip-switch-checkbox"
            id="flip-switch-1"
          >
          <label class="flip-switch-label" for="flip-switch-1"></label>
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
export default {
  name: 'FormComponent',
  props: {},
  data() {
    return {
      obj: {}
    };
  },
  methods: {
    fetchUsers() {
      const self = this;
      self.$http
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
    submitForm(e) {
      this.$validator.validate().then((valid) => {
        if (valid) console.log(JSON.parse(JSON.stringify(this.obj)));
      });
    },
    resetForm(e) {
      this.obj = { is_active: false };
      this.$nextTick(function() {
        this.$validator.validate();
      });
    }
  },
  mounted() {
    this.fetchUsers();
  }
};
</script>
