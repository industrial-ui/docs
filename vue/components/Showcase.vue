<template>
  <div :class="{expanded: show}" class="showcase">
    <div class="showcase_content">
      <component :is="component" />
    </div>

    <div class="showcase_toolbar">
      <button type="button" class="showcase_toolbar_icon" @click="toggleShow('code')">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      </button>
      <button type="button" class="showcase_toolbar_icon" @click="toggleShow('config')">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      </button>
    </div>

    <transition name="showcase-code" mode="in-out">
      <pre v-if="show === 'code'" class="showcase_code code" :class="'language-html'">
        <code v-html="data.demoCode" />
      </pre>

      <pre v-else-if="show === 'config'" class="showcase_code code" :class="'language-javascript'">
        <code v-html="data.demoConfig" />
      </pre>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue';

type ShowType = 'code'|'config'|null;

export default Vue.extend({
  name: 'Showcase',
  props: {
    data: {
      type: Object as PropType<{
        path: string,
        demoCode: string,
        demoConfig: string,
      }>,
      default: () => ({
        path: '',
        demoCode: '',
        demoConfig: '',
      }),
    },
  },
  data () {
    return {
      show: null as ShowType,
    };
  },
  computed: {
    component () {
      return () => import(`../examples/${this.data.path}`);
    },
  },
  methods: {
    toggleShow (val?: ShowType): void {
      if (val && this.show === val) {
        this.show = null;
      } else {
        this.show = val ?? null;
      }
    },
  },
});
</script>
