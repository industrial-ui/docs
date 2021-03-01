import getTranslation from '../../common/get-translation';
import translateInterface from '../../common/articles/interface-lang';
import type { Plugin } from '@nuxt/types'

const translation: Plugin = (context, inject) => {
  inject('t', getTranslation);
  inject('interface', translateInterface);
}

export default translation
