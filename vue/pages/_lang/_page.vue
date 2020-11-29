<template>
  <article>
    <h1>
      {{ article.title | tranlation }}
    </h1>
    <div>
      <p v-for="block in article.blocks">
        {{ block.text }}
      </p>
    </div>
  </article>
</template>

<script lang="ts">
  import Vue from 'vue';
  import type {SupportedLanguages} from '../../../common/types';
  import articles from '../../../common/articles';

  export default Vue.extend({
    data () {
      return {
        article: {},
      };
    },
    computed: {
      lang (): SupportedLanguages {
        return this.$route.params.lang as SupportedLanguages;
      },
    },
    async mounted () {
      const article = articles[this.$route.params.page as keyof typeof articles];
      this.article = (await article()).default;
    },
  });
</script>
