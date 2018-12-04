<template>
  <div class="auth-wrapper">
    <div class="auth-box">
      <nav class="tabs is-toggle is-fullwidth">
        <ul>
          <li class="tab is-active"><a><span>Sign In</span></a></li>
          <li class="tab"><a><span>Sign Up</span></a></li>
        </ul>
      </nav>
      <div class="content-tabs">
        <div class="content-tab" id="signin-content">
          <form
            class="form-container"
            @submit.prevent="submitForm"
            @reset.prevent="resetForm"
            id="test-form"
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
                    name="user.email"
                    :class="{'is-danger': errors.has('user.email') }"
                    data-vv-as="Email"
                    v-validate="'required|email'"
                    autocomplete="off"
                    @keypress.32.prevent
                  >
                  <span
                    v-if="errors.has('user.email')"
                    class="help is-danger"
                  >{{ errors.first('user.email') }}</span>
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
                    v-model.trim="user.password"
                    name="user.password"
                    :class="{'is-danger': errors.has('user.password') }"
                    v-validate="'required|alpha'"
                    data-vv-as="Password"
                    autocomplete="off"
                  >
                  <span
                    v-if="errors.has('user.password')"
                    class="help is-danger"
                  >{{ errors.first('user.password') }}</span>
                </div>
              </div>
            </div>
            <button class="button is-validate is-fullwidth is-medium" type="submit" style="margin-top: 2rem">Sign In</button>
          </form>
        </div>
        <div class="content-tab hidden" id="signup-content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      newUser: {}
    };
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