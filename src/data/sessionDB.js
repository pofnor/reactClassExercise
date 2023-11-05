/* sample of database
  {
    session: '2',
    questionHeader: 'header',
    question: ['line1','line2','line3'],
    answerHeader: 'header',
    answer: ['💻 (App.js)','🌟Tips:','line2','line3'],
  },
*/
export const sessions = [
  {
    session: '2',
    questionHeader: 'useSearchParams in React Router Dom',
    question: ['import { useSearchParams } from "react-router-dom"'],
    answerHeader: 'const [SearchParams, setSearchParams]= useSearchParams({n:3})',
    answer: [
      'see the query param at the end of URL like ?n=3',
      'this is the Hook']
  },
  {
    session: '2',
    questionHeader: 'Navigate in React Router Dom',
    question: ['Navigate','useNavigate'],
    answerHeader: 'import { Navigate, useNavigate } from "react-router-dom"',
    answer: [
      '<Navigate to="/"> is the component like Link component and navigate to the link',
      'useNavigate is hooks and i use it in NotFound.jsx',
      '💻 const navigate=useNavigate()',
      'navigate("URL",options) that the options like Link components like "replace"',
      '🌟Tips: navigate(-1) can takes negative numbers like -1 that simulate the back button on browser'
    ],
  },
  {
    session: '2',
    questionHeader: '<Link>',
    question: ['replace','reloadDocument','state'],
    answerHeader: '<Link to="/" Property>Home</Link>',
    answer: [
      'Property=> replace: replace the previous link when we click on backward in browser. use case is for login page that the user don`t need to go back',
      'Property=> reloadDocument: when click on that link, entire page is reloading',
      'Property=> state={ }: is not show on the url and get passing any times that click on it',
      'and on the destination, we can use it in this way:',
      '💻 import { useLocation } from "react-router-dom"',
      '💻 const location = useLocation()',
      '💻 {location.state}',
    ],
  },
  {
    session: '2',
    questionHeader: '* in React Router Dom',
    question: ['<Route path="*"','<Route path="/books/*" element={<BookRoutes />} />'],
    answerHeader: 'Not Found (404)',
    answer: [
      'This Route(<Route path="*") matches literly any type in url that not match any define routes',
      'when we want to use Component for nested route, we must use * like this(<Route path="/books/*") . BookRoutes Component return <Routes>',
    ],
  },
  {
    session: '2',
    questionHeader: 'Routes',
    question: ['use Multiple Routes'],
    answerHeader: '<Routes>',
    answer: [
      'For showing specific content in specific location, we can use multiple Routes',
      'For example in below code, show "Extra Content" above "Home" and "Books" components (Because use location)',      
      '💻',
      '<Routes location="/books">',
      '<Route path="/books" element={<h1>Extra Content</h1>} />',
      '</Routes>',
      '<Routes>',
      '<Route path="/" element={<Home />} />',
      '<Route path="/books" element={<Books />} />',
      '</Routes>',
      'And in below code, show "Extra Content" above "Books" components',
      'Use Case: use for different sidebar in specific url',
      '💻',
      '<Routes',
      '<Route path="/books" element={<h1>Extra Content</h1>} />',
      '</Routes>',
      '<Routes>',
      '<Route path="/" element={<Home />} />',
      '<Route path="/books" element={<Books />} />',
      '</Routes>'    
    ],
  },
  {
    session: '2',
    questionHeader: 'Outlet in React Router Dom',
    question: ['Nesting Route','Layout','context'],
    answer: [
      'For share the code with the components inside nesting route like second navigator bar:',      
      '💻 (App.js)',
      '<Route path="/books" element={<BookLayout />} >',
      '<Route index element={<Books />} />',
      '<Route path="one" element={<one />} />',
      '<Route path="two" element={<two />} />',
      '<Route path="three" element={<three />} />',
      '</Route>',
      '💻 (BookLayout.js)',
      'import { Link, Outlet } from "react-router-dom"',
      'export function BookLayout() {',
      'return (',
      '<>',
      '<Link to="/books/one">Book 1</Link>',
      '<Link to="/books/two">Book 2</Link>',
      '<Link to="/books/three">Book 3</Link>',
      '<Outlet />',
      '</>',
      ')',
      '}',
      '🌟Tips: we can remove path from first Route (path="/books") and just wrap some routes for sharing the code(<BookLayout />) with components',
      '🌟Tips: can send the object to nesting component with this:',
      '💻 (BookLayout.js)',
      '<Outlet context={{ key:"value"}} />',
      'and use this value in every nested component like this:',
      '💻 (one.js)',
      'import { useOutletContext } from "react-router-dom"',
      'const obj = useOutletContext()'
      ]
  },
  {
    session: '2',
    questionHeader: 'Nested Route in React Router Dom',
    question: ['Nesting Route'],
    answer: [
      'For make the url like below, we can use nested route :',
      '/books',
      '/books/one',
      '/books/two',
      '/books/three',
      '💻',
      '<Route path="/books">',
      '<Route index element={<Books />} />',
      '<Route path="one" element={<one />} />',
      '<Route path="two" element={<two />} />',
      '<Route path="three" element={<three />} />',
      '</Route>'
      ],
  },
  {
    session: '2',
    questionHeader: 'useParams in React Router Dom',
    question: ['useParams'],
    answerHeader: 'import { useParams } from "react-router-dom"',
    answer: [
      'Custom Dynamic parameter takes from url ',
      '💻',
      'Route path: "/session/:id"',
      'const { id } = useParams()',
      '🌟Tips about when the two route match:',
      'before the version 6 of react-router-dom , check route from top to bottom, but since we using verion 6, react-router knows to use the Hard Code instead of Dynamic route by id,for example the second route used when we type "/books/new"',
      '💻',
      '<Route path="/books/:id element={<Book />} />"',
      '<Route path="/books/new element={<NewBook />} />"'
    ]
  },
  {
    session: '2',
    questionHeader: 'anchor tag vs Link component',
    question: ['<a>','<Link>','<NavLink>'],
    answer: [
      'use <Link> when we create a link within react app',
      '<NavLink> is like <Link> and also has styling when it is active',
      'use <a> when we want to create a link to an external page or a non-route within react app',
      'when we use <Link>, entire page doesn`t refresh it and only change the content inside the <Routes> section'],
  },
  {
    session: '2',
    questionHeader: 'Different type of Router in React Router Dom',
    question: [
      'BrowserRouter',
      'HashRouter',
      'unstabe_HistoryRouter',
      'MemoryRouter',
      'StaticRouter'
      ],
    answer: [
      'HashRouter : localhost:3000/shop => localhost:3000/#/shop',
      'in the HashRouter, the url is not change actually and still the localhost:3000',
      'unstabe_HistoryRouter : direct access to Browser history',
      'MemoryRouter : the url in browser isn`t change and store url in memory',
      'MemoryRouter is useful if you need to run test on your code.',
      'StaticRouter : the server-side router and use like this :',
      'import {StaticRouter} from "react-router-dom/server"',
      '<StaticRouter location="/shop">'
    ]
  },
  {
    session: '2',
    questionHeader: 'eject',
    question: ['at Create React App'],
    answerHeader: 'npm run eject',
    answer: [
      'If you aren`t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.',
      'Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you`re on your own.',
      'You don`t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn`t feel obligated to use this feature. However we understand that this tool wouldn`t be useful if you couldn`t customize it when you are ready for it.',
      'this is a one-way operation. Once you `eject`, you can`t go back!',
      ],
  },
  {
    session: '3',
    questionHeader: 'TEMP Reminder',
    question: ['Store', 'Broadcasting from top to bottom', 'Redux', 'Redux/dispatch', 'React/dispatch', 'Context', 'NavBar Mount or Update,Why the react-bootstrap/Navbar don`t use Link ???']
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
