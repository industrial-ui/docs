import getTranslation from '../common/get-translation';
import translateInterface from '../common/articles/interface-lang';

declare module 'vue/types/vue' {
  interface Vue {
    $t: typeof getTranslation
    $interface: typeof translateInterface
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $t: typeof getTranslation
    $interface: typeof translateInterface
  }
  interface Context {
    $t: typeof getTranslation
    $interface: typeof translateInterface
  }
}
