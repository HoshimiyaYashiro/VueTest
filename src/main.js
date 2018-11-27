import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import App from './App.vue';

Validator.extend('letter', {
  getMessage: field => `The ${field} field may only contain letter characters.`,
  validate(value, args) {
    // eslint-disable-next-line operator-linebreak
    const patternStart =
      '^([a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ';
    const patternEnd = ']+)$';
    let pattern = patternStart + patternEnd;
    if (args) pattern = patternStart + args + patternEnd;
    return new RegExp(pattern).test(value);
  }
});
Vue.use(VeeValidate);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
