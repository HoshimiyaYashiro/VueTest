<template>
  <div class="auth-wrapper">
    <div class="auth-box">
      <nav class="tabs is-toggle is-fullwidth">
        <ul>
          <li class="tab" :class="{'is-active': selectedTab === 'signin'}">
            <a @click.prevent="selectTab('signin', $event)">
              <span>Sign In</span>
            </a>
          </li>
          <li class="tab" :class="{'is-active': selectedTab === 'signup'}">
            <a @click.prevent="selectTab('signup', $event)">
              <span>Sign Up</span>
            </a>
          </li>
        </ul>
      </nav>
      <div class="content-tabs">
        <div class="content-tab" id="signin-content" :class="{'is-hide': selectedTab !== 'signin'}">
          <form
            class="form-container"
            id="signin-form"
            data-vv-scope="signin-form"
          >
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Email</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <input
                    class="input"
                    type="email"
                    v-model="user.email"
                    name="email"
                    :class="{'is-danger': errors.has('signin-form.email') }"
                    data-vv-as="Email"
                    v-validate="'required|email'"
                    autocomplete="off"
                    @keypress.32.prevent
                  >
                  <span
                    v-if="errors.has('signin-form.email')"
                    class="help is-danger"
                  >{{ errors.first('signin-form.email') }}</span>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Password</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <input
                    class="input"
                    type="password"
                    placeholder="Password"
                    v-model="user.password"
                    name="password"
                    :class="{'is-danger': errors.has('signin-form.password') }"
                    v-validate="'required|alpha_num'"
                    data-vv-as="Password"
                    autocomplete="off"
                  >
                  <span
                    v-if="errors.has('signin-form.password')"
                    class="help is-danger"
                  >{{ errors.first('signin-form.password') }}</span>
                </div>
              </div>
            </div>
            <button
              class="button is-validate is-fullwidth is-medium"
              type="submit"
              style="margin-top: 2rem"
              :disabled="errors.any('signin-form')"
            >Sign In</button>
          </form>
        </div>
        <div class="content-tab" id="signup-content" :class="{'is-hide': selectedTab !== 'signup'}">
          <form
            class="form-container"
            @submit.prevent="signup"
            id="signup-form"
            data-vv-scope="signup-form"
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
                    v-model="newUser.name"
                    name="name"
                    :class="{'is-danger': errors.has('signup-form.name') }"
                    v-validate="'required|alpha_spaces'"
                    autocomplete="off"
                  >
                  <span
                    v-if="errors.has('signup-form.name')"
                    class="help is-danger"
                  >{{ errors.first('signup-form.name') }}</span>
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
                    v-model="newUser.email"
                    name="email"
                    :class="{'is-danger': errors.has('signup-form.email') }"
                    v-validate="'required|email'"
                    autocomplete="off"
                    @keypress.32.prevent
                  >
                  <span
                    v-if="errors.has('signup-form.email')"
                    class="help is-danger"
                  >{{ errors.first('signup-form.email') }}</span>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Password</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <input
                    class="input"
                    type="password"
                    v-model="newUser.password"
                    name="password"
                    :class="{'is-danger': errors.has('signup-form.password') }"
                    v-validate="'required|alpha_num'"
                    autocomplete="off"
                    @keypress.32.prevent
                  >
                  <span
                    v-if="errors.has('signup-form.password')"
                    class="help is-danger"
                  >{{ errors.first('signup-form.password') }}</span>
                </div>
              </div>
            </div>
            <button
              class="button is-validate is-fullwidth is-medium"
              type="submit"
              style="margin-top: 2rem"
              :disabled="errors.any('signup-form')"
            >Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      newUser: {},
      selectedTab: 'signin'
    };
  },
  methods: {
    selectTab(tab, e) {
      this.selectedTab = tab;
    },
    signup() {
      const self = this;
      this.$validator.validate('signup-form.*').then((valid) => {
        if (valid) {
          const userDb = self.$root.userDb;
          if (!userDb[self.newUser.email]) {
            userDb[self.newUser.email] = JSON.parse(JSON.stringify(self.newUser));
          } else {
            alert('This account is exist!');
          }
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
$light-blue: #e8f4f9;
$dark-blue-1: #90a4ae;
$dark-blue-2: #78909c;
$emerald: #2ecc71;
.auth-wrapper {
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: $dark-blue-1;
}
.auth-box {
  width: 40rem;
  margin-top: 20rem;
  .tabs {
    margin: 0;
  }
  .tab {
    font-size: 1.3rem;
    a {
      background-color: white;
      border: 0;
      border-radius: unset !important;
      z-index: 1;
    }
    &.is-active a {
      background-color: $emerald;
      color: white;
    }
  }
  .content-tabs {
    background-color: white;
    padding: 2rem;
    border-top: solid 2px #f1c40f;
  }
}
</style>