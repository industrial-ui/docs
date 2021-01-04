<template>
  <article id="content">
    <h1>
      {{ article.title | tranlation }}
    </h1>
    <div v-if="article.article">
      <template v-for="(block, i) in article.article.blocks">
        <template v-if="block.type === 'paragraph'">
          <p :key="i" v-html="getTranslation(block.data.text)" />
        </template>
        <template v-if="block.type === 'header'">
          <component :is="'h' + block.data.level" :key="i" v-html="getTranslation(block.data.text)" />
        </template>
        <template v-if="block.type === 'list'">
          <component :is="block.data.style === 'ordered' ? 'ol' : 'ul'" :key="i">
            <li v-for="(item, j) in block.data.items" :key="j" v-html="getTranslation(item)" />
          </component>
        </template>
        <template v-if="block.type === 'code'">
          <pre class="code">
            <code v-html="block.data.code" />
          </pre>
        </template>
        <template v-if="block.type === 'image'">
          <figure>
            <img :src="block.data.url" alt="" />
            <figcaption v-html="getTranslation(block.data.caption)" />
          </figure>
        </template>
      </template>
    </div>
  </article>
</template>

<script lang="ts">
  import Vue from 'vue';
  import type {SupportedLanguages} from '../../../common/types';
  import articles from '../../../common/articles';
  import getTranslation from '../../../common/get-translation';

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
    methods: {
      getTranslation,
    },
  });
</script>
