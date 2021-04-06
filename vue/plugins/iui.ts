import Vue from 'vue';
import {iui} from 'industrial-ui-vue';

const config = {
  globalClass: 'ui',
  components: {
    button: {
      class: 'button',
    },
    dropdown: {

    }
  }
};

(Vue as any).use(iui, config);
