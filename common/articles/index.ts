import docStyling from './doc-styling';
import installation from './installation';

const articles = {
  'doc-styling': docStyling,
  'installation': installation,
};

export default articles;

// const articles = {
//   'doc-styling': () => import('./doc-styling'),
//   'installation': () => import('./installation'),
// }
// export default articles;
