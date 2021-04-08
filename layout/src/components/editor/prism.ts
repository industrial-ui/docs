import Prism, {Grammar} from 'prismjs';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';

export type AllowedLanguagesType = 'html'|'javascript'|'css'|'json'|'bash';
export const ALLOWED_LANGUAGES: AllowedLanguagesType[] = ['html', 'javascript', 'css', 'json', 'bash'];
export const DEFAULT_LANGUAGE = 'html';

export const prismLanguages: Record<AllowedLanguagesType, Grammar> = {
  'html': Prism.languages.html,
  'javascript': Prism.languages.javascript,
  'css': Prism.languages.css,
  'json': Prism.languages.json,
  'bash': Prism.languages.bash,
};

export const filterFromPrism = (code: string): string => {
  return code
    .replace(/<span[^>]*token[^>]*>|<\/span>/gi, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

export const highlightCode = (text: string, language: AllowedLanguagesType) => {
  return Prism.highlight(text, prismLanguages[language], language);
}
