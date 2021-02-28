<template>
  <div>
    <component :is="component" />
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue';

export default Vue.extend({
  name: 'Showcase',
  props: {
    data: {
      type: Object as PropType<{ component: string }>,
      default: () => ({
        component: '',
      }),
    },
  },
  computed: {
    component () {
      return () => import(`../examples/${this.data.component}`);
    },
  },
});
</script>
