/* sample of database
  {
    session: '2',
    questionHeader: 'header',
    question: ['line1','line2','line3'],
    answerHeader: 'header',
    answer: ['line1','line2','line3'],
  }
*/
export const sessions = [
  {
    session: '1',
    questionHeader: 'Idioms',
    question: ['Tree shaking'],
    answer: ['Removing unused code'],
  },
  {
    session: '1',
    questionHeader: 'Idioms',
    question: ['HMR'],
    answer: ['Hot Module Replacement'],
  },
  {
    session: '1',
    questionHeader: 'The JavaScript module bundler',
    question: ['webpack', 'Rollup', 'esbuild', 'Turbopack'],
    answerHeader: 'Use Cases',
    answer: [
      '"Create React App" use webpack',
      'Vite uses Rollup and esbuild under the hood; esbuild is used for pre-bundling while Rollup is used for Vite’s production builds.',
      'Nextjs use Turbopack',
      'Turbopack is The Rust-powered successor to Webpack',
      'The Turbopack team view it as the natural successor to Webpack (it`s built by Vercel team members who originally built Webpack)',
    ],
  },
  {
    session: '1',
    questionHeader: 'JavaScript modules',
    question: ['CommonJS', 'ES(ECMAScript) modules'],
    answer: [
      'at CommonJS, the entire tool or library must be imported :',
      '💻',
      'const utils = require("./utils");',
      'const query = "Rollup";',
      'utils.ajax(`https://api.example.com?search=${query}`).then(handleResponse);',
      '---------------------------------------------------------------------------',
      'at ES modules, instead of importing the whole object, we can just import the one function we need :',
      '💻',
      'import { ajax } from "./utils";',
      'const query = "Rollup";',
      'ajax(`https://api.example.com?search=${query}`).then(handleResponse);'
    ],
  },
];
