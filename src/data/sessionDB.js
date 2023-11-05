/* sample of database
  {
    session: '2',
    questionHeader: 'header',
    question: ['line1','line2','line3'],
    answerHeader: 'header',
    answer: ['💻 (App.js)','line1','line2','line3'],
  },
*/
export const sessions = [
  {
    session: '3',
    questionHeader: 'TEMP Reminder',
    question: ['Store', 'Broadcasting from top to bottom', 'Redux', 'Redux/dispatch', 'React/dispatch', 'Context', 'NavBar Mount or Update,Why the react-bootstrap/Navbar don`t use Link ???']
  },
  {
    session: '2',
    questionHeader: 'React Router Dom',
    question: ['line1', 'line2', 'line3'],
    answerHeader: 'header',
    answer: ['💻 (App.js)', 'line1', 'line2', 'line3']
  },
  {
    session: '2',
    questionHeader: 'Babel',
    question: ['what is Babel?'],
    answer: ['Put in next-gen JavaScript and Get browser-compatible Javascript out',
      'because of this, in older version of react , use the import react']
  },
  {
    session: '1',
    questionHeader: 'Class Component re-renders',
    question: ['React.Component', 'React.PureComponent'],
    answer: ['PureComponent skipping unnecessary re-renders for class components']
  },
  {
    session: '1',
    questionHeader: 'Function Components',
    question: ['hooks', 'useState', 'useEffect', 'compare to Class Components'],
    answer: [
      '💻 (App.js)',
      'import { useEffect, useState } from "react"',
      'function App() {',
      'const [toggle1,setToggle1] = useState(false)',
      'const [toggle2,setToggle2] = useState(false)',
      'useEffect(()=>{console.log("like componentDidMount() or componentDidUpdate()")})',
      'useEffect(()=>{console.log("like componentDidMount()")},[])',
      'useEffect(()=>{console.log("like componentDidUpdate() just for toggle1")},[toggle1])',
      'console.log("render")',
      'return (',
      '<div>',
      '<button onClick={()=>setToggle1(!toggle1)}>Toggle1</button>',
      '<button onClick={()=>setToggle2(!toggle2)}>Toggle2</button>',
      '</div>',
      ')',
      '}',
      'export default App'
    ]
  },
  {
    session: '1',
    questionHeader: 'Idioms',
    question: ['Tree shaking'],
    answer: ['Removing unused code']
  },
  {
    session: '1',
    questionHeader: 'Idioms',
    question: ['HMR'],
    answer: ['Hot Module Replacement']
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
      'The Turbopack team view it as the natural successor to Webpack (it`s built by Vercel team members who originally built Webpack)'
    ]
  },
  {
    session: '2',
    questionHeader: 'JavaScript modules',
    question: ['CommonJS', 'ES(ECMAScript) modules'],
    answer: [
      'at CommonJS, the entire tool or library must be imported :',
      '💻',
      'const utils = require("./utils");',
      'utils.ajax("https://api.example.com?search=$query").then(handleResponse);',
      '---------------------------------------------------------------------------',
      'at ES modules, instead of importing the whole object, we can just import the one function we need :',
      '💻',
      'import { ajax } from "./utils";',
      'ajax("https://api.example.com?search=$query").then(handleResponse);'
    ]
  },
  {
    session: '1',
    questionHeader: 'Class Component',
    question: ['componentDidMount()', 'componentDidUpdate()'],
    answer: [
      '💻 (App.js)',
      'import React from "react";',
      'class App extends React.Component {',
      'constructor(){',
      'super()',
      'this.state={toggle:true}',
      'console.log("here in constructor")',
      '}',
      'componentDidMount(){',
      'console.log("here in componentDidMount")',
      '}',
      'componentDidUpdate(){',
      'console.log("here in componentDidUpdate")',
      '}',
      'render() {',
      'console.log("here in render")',
      'return(',
      '<>',
      '<button onClick={()=>{this.setState(()=>({toggle:this.state.toggle}))}}>toggle</button>',
      '</>',
      ')',
      '}',
      '}',
      'export default App;'
    ]
  }
]
