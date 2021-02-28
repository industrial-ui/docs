import docStyling from './doc-styling';
import installation from './installation';
import button from './button';
import dropdown from './dropdown';

const articles = {
  'doc-styling': docStyling,
  'installation': installation,
  'button': button,
  'dropdown': dropdown,
};

export default articles;

// const articles = {
//   'doc-styling': () => import('./doc-styling'),
//   'installation': () => import('./installation'),
// }
// export default articles;
