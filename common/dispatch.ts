import {SupportedLanguages} from './types';

export const LANGUAGE_EVENT = 'iui-language';
export const THEME_EVENT = 'iui-language';
export const LINK_EVENT = 'iui-link';
export type IuiActions = typeof LANGUAGE_EVENT | typeof THEME_EVENT | typeof LINK_EVENT;

export const dispatch = (action: IuiActions, value: string, saveInLS: boolean = false): void => {
  if (typeof window === 'undefined') return;

  sessionStorage.setItem(action, value);
  if (saveInLS) localStorage.setItem(action, value);
  window.dispatchEvent(new CustomEvent(action));
};


type SubscribeOverload = {
  (action: typeof LANGUAGE_EVENT, cb: (lang: SupportedLanguages) => void) : void,
  (action: typeof THEME_EVENT, cb: (theme: string) => void) : void,
  (action: typeof LINK_EVENT, cb: (link: string) => void) : void,
}

export const subscribe: SubscribeOverload = (action: IuiActions, cb: (arg0: any) => void) => {
  if (typeof window === 'undefined') return;

  window.addEventListener(action, () => {
    const data = sessionStorage.getItem(action);
    if (action === LANGUAGE_EVENT) cb(data as SupportedLanguages);
    else if (action === LINK_EVENT) cb(data as string);
    else if (action === THEME_EVENT) cb(data as string);
  });
};
