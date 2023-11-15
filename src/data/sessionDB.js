/* sample of database
  {
    session: '4',
    id: crypto.randomUUID(),
    question:[
      {header:['i am header']},
      {text:['question1','question2']},
      {code:['questioncode1','questioncode2']},
      {text:['question3']},
      {image:['CSS-in-JS.webp']},
      {code:['questioncode2']}
    ],
    answer:[
      {header:['i am header']},
      {text:['answer1','answer2']},
      {code:['answercode1']},
      {text:['answer3','💻 (App.js)']},
      {image:['CSS-in-JS.webp']},
      {code:['answercode2']},
      {text:['🌟Tips:answer']}
    ]
  },
*/

export const sessions = [
  {
    session: '3',
    id: crypto.randomUUID(),
    question:[
      {header:['CSS in JS']},      
      {image:['CSS-in-JS.webp']},      
    ],
    answer:[
      {text:[
        'Styling in React initially involved using regular CSS or preprocessor solutions like Sass or LESS.',
        'But, CSS-in-JS library that allows you to write actual CSS code within your JavaScript files, dynamic styles based on props, and easy theming.',
      ]},
      {header:['Libraries:']},
      {text:[
        '1-Styled-components',
        '2-Emotion'
      ]},
      {header:['Frameworks:']},
      {text:[
        '1-Tailwind CSS',
        '2-Material-UI',
      ]},
      {text:[
        '🌟Tips: inline styles',
        'Using inline styles in React involves applying styles directly to JSX elements using the style attribute.',
        '🌟Cons:',
        '--No Pseudo-classes or Media Queries',
        '--Override Difficulties',
        '--Maintenance Challenges',
      ]},
      {text:[
        'here`s a list of some popular CSS-in-JS libraries and frameworks based on their historical popularity and usage in the React ecosystem:',]},
      {header:['1-Styled-components:']},
      {text:[
        'Popularity: Very popular.',
        'Usage: Widely used in the React community. Known for its simplicity and ease of use.',
      ]},
      {header:['2-Emotion:']},
      {text:[
        'Popularity: popular.',
        'Usage:  Gaining popularity, especially for its performance-focused features.',
      ]},
      {header:['3-CSS Modules:']},
      {text:[
        'Popularity: popular.',
        'Usage: Often used in conjunction with other tools or libraries to achieve modular and scoped styles.',
      ]},
      {header:['4-Aphrodite:']},
      {text:[
        'Popularity: Moderately popular.',
        'Usage:  Used by those who prefer a lightweight CSS-in-JS solution with a minimal API.',
      ]},
      {header:['5-Radium:']},
      {text:[
        'Popularity: Moderately popular.',
        'Usage: Known for its additional features like automatic vendor prefixing and support for pseudo-classes.',
      ]},
      {header:['6-JSS (JSS-React):']},
      {text:[
        'Popularity: Moderate.',
        'Usage: Provides a high degree of customization and is used by developers who value flexibility.',
      ]},
      {header:['7-Linaria:']},
      {text:[
        'Popularity: Growing.',
        'Usage: Gaining popularity for its emphasis on zero-runtime overhead and static extraction.',
      ]},
      {header:['8-Tailwind CSS:']},
      {text:[
        'Popularity: Very popular.',
        'Usage: Known for its utility-first approach. Used widely, especially in projects where rapid development and consistent styling are priorities.',
      ]},
      {header:['9-Material-UI:']},
      {text:[
        'Popularity: Very popular.',
        'Usage: Highly popular for React applications that follow Google`s Material Design guidelines.',
      ]},

    ]
  },
  {
    session: '1',
    id: crypto.randomUUID(),
    question:[
      {header:['Class Component']},
      {text:['componentDidMount()', 'componentDidUpdate()']},
    ],
    answer:[
      {text:['💻 (App.js)']},
      {code:[
        'import React from "react";',
        ' class App extends React.Component {',
        '   constructor(){',
        '     super()',
        '     this.state={toggle:true}',
        '     console.log("here in constructor")',
        '   }',
        '   componentDidMount(){',
        '     console.log("here in componentDidMount")',
        '   }',
        '   componentDidUpdate(){',
        '     console.log("here in componentDidUpdate")',
        '   }',
        '   render() {',
        '     console.log("here in render")',
        '     return(',
        '       <>',
        '       <button onClick={()=>{this.setState(()=>({toggle:this.state.toggle}))}}>toggle</button>',
        '       </>',
        '     )',
        '   }',
        ' }',
        'export default App;'
      ]},
    ]
  },
  {
    session: '2',
    id: crypto.randomUUID(),
    question:[
      {header:['JavaScript modules']},
      {text:['CommonJS', 'ES(ECMAScript) modules']},
    ],
    answer:[
      {text:[
        'at CommonJS, the entire tool or library must be imported',
        'at ES modules, instead of importing the whole object, we can just import the one function we need',
        'CommonJS modules load synchronously, meaning that they block the execution of code until the module is fully loaded and executed.',
        'ES modules load asynchronously by default, making them ideal for modern web applications where non-blocking behavior is crucial for performance. As a result, ESM is a preferred choice for frontend development',
      ]},
      {code:[
        'const utils = require("./utils");',
        'utils.ajax("https://api.example.com?search=$query").then(handleResponse);',
        ' ',
        'import { ajax } from "./utils";',
        'ajax("https://api.example.com?search=$query").then(handleResponse);'
      ]},
    ]
  },
  {
    session: '1',
    id: crypto.randomUUID(),
    question:[
      {header:['The JavaScript module bundler']},
      {text:[
        'webpack', 'Rollup', 'esbuild', 'Turbopack'
      ]}, 
    ],
    answer:[
      {text:[
        '"Create React App" use webpack',
        'Vite uses Rollup and esbuild under the hood; esbuild is used for pre-bundling while Rollup is used for Vite’s production builds.',
        'Nextjs use Turbopack',
        'Turbopack is The Rust-powered successor to Webpack',
        'The Turbopack team view it as the natural successor to Webpack (it`s built by Vercel team members who originally built Webpack)'
      ]},
    ]
  },
  {
    session: '1',
    id: crypto.randomUUID(),
    question:[
      {header:['HMR']},
    ],
    answer:[      
      {text:['Hot Module Replacement']},      
    ]
  },
  {
    session: '1',
    id: crypto.randomUUID(),
    question:[
      {header:['Tree shaking']},
    ],
    answer:[      
      {text:['Removing unused code']},      
    ]
  },
  {
    session: '1',
    id: crypto.randomUUID(),
    question:[
      {header:['Function Components']},
      {text:['hooks', 'useState', 'useEffect', 'compare to Class Components']},
    ],
    answer:[
      {text:['💻 (App.js)']},
      {code:[
        'import { useEffect, useState } from "react"',
        ' function App() {',
        '   const [toggle1,setToggle1] = useState(false)',
        '   const [toggle2,setToggle2] = useState(false)',
        ' ',
        '   useEffect(()=>{console.log("like componentDidMount() or componentDidUpdate()")})',
        '   useEffect(()=>{console.log("like componentDidMount()")},[])',
        '   useEffect(()=>{console.log("like componentDidUpdate() just for toggle1")},[toggle1])',
        ' ',
        '   console.log("render")',
        ' ',
        '   return (',
        '     <div>',
        '       <button onClick={()=>setToggle1(!toggle1)}>Toggle1</button>',
        '       <button onClick={()=>setToggle2(!toggle2)}>Toggle2</button>',
        '     </div>',
        '   )',
        ' }',
        ' ',
        'export default App'
      ]},      
    ]
  },
  {
    session: '1',
    id: crypto.randomUUID(),
    question:[
      {header:['Class Component re-renders']},
      {text:[
        'React.Component', 'React.PureComponent'
      ]},
    ],
    answer:[
      {text:['PureComponent skipping unnecessary re-renders for class components']},
    ]
  },
  {
    session: '2',
    id: crypto.randomUUID(),
    question:[
      {header:['Babel']},
    ],
    answer:[
      {text:[
        'Put in next-gen JavaScript and Get browser-compatible Javascript out',
        'because of this, in older version of react , use the import react'
      ]},
    ]
  },
  {
    session: '2',
    id: crypto.randomUUID(),
    question:[
      {header:['Topics brief description in class']},
    ],
    answer:[
      {text:[
        'Store',
        'Broadcasting from top to bottom',
        'Redux',
        'Redux/dispatch',
        'React/dispatch',
        'Context',
        'Redux is A Predictable State Container for JS Apps'
      ]},
    ]
  },
  {
    session: '2',
    id: crypto.randomUUID(),
    question:[
      {header:['eject']},
      {text:['Create React App']},      
    ],
    answer:[
      {text:[
        'If you aren`t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.',
        'Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you`re on your own.',
        'You don`t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn`t feel obligated to use this feature. However we understand that this tool wouldn`t be useful if you couldn`t customize it when you are ready for it.',
        'this is a one-way operation. Once you `eject`, you can`t go back!',
      ]},
    ]
  },
  {
    session: '2',
    id: crypto.randomUUID(),
    question:[
      {header:['Different type of Router in React Router Dom']},
      {text:[
        'BrowserRouter',
        'HashRouter',
        'unstabe_HistoryRouter',
        'MemoryRouter',
        'StaticRouter'
      ]},
    ],
    answer:[
      {text:[
        'HashRouter : localhost:3000/shop => localhost:3000/#/shop',
        'in the HashRouter, the url is not change actually and still the localhost:3000',
        'unstabe_HistoryRouter : direct access to Browser history',
        'MemoryRouter : the url in browser isn`t change and store url in memory',
        'MemoryRouter is useful if you need to run test on your code.',
        'StaticRouter : the server-side router and use like this :',
        'import {StaticRouter} from "react-router-dom/server"',
        '<StaticRouter location="/shop">'
      ]},
    ]
  },
  {
    session: '2',
    id: crypto.randomUUID(),
    question:[
      {header:['anchor tag vs Link component']},
      {text:[
        '<a>','<Link>','<NavLink>'
      ]},
    ],
    answer:[
      {text:[
        'use <Link> when we create a link within react app',
        '<NavLink> is like <Link> and also has styling when it is active',
        'use <a> when we want to create a link to an external page or a non-route within react app',
        'when we use <Link>, entire page doesn`t refresh it and only change the content inside the <Routes> section'
      ]},
    ]
  },
  {
    session: '2',
    id: crypto.randomUUID(),
    question:[
      {header:['useParams in React Router Dom']},      
    ],
    answer:[
      {header:['Custom Dynamic parameter takes from url']},
      {code:[
        '<Route path="/books/:id element={<Book />} />"',
        '<Route path="/books/new element={<NewBook />} />"',
      ]},
      {text:['💻<Book />']},
      {code:[
        'import { useParams } from "react-router-dom"',
        'const { id } = useParams()',
      ]},
      {text:[
        '🌟Tips about when the two route match:',
        'before the version 6 of react-router-dom , check route from top to bottom, but since we using verion 6, react-router knows to use the Hard Code instead of Dynamic route by id,for example the second route used when we type "/books/new"'
      ]}
    ]
  },
  {
    session: '2',
    id: crypto.randomUUID(),
    question:[
      {header:['Nested Route in React Router Dom']},      
    ],
    answer:[
      {text:[
        'For make the url like below, we can use nested route :',
        '/books',
        '/books/one',
        '/books/two',
        '/books/three',
      ]},
      {code:[
        '<Route path="/books">',
        '   <Route index element={<Books />} />',
        '   <Route path="one" element={<one />} />',
        '   <Route path="two" element={<two />} />',
        '   <Route path="three" element={<three />} />',
        '</Route>'
      ]},
    ]
  },
  {
    session: '2',
    id: crypto.randomUUID(),
    question:[
      {header:['Outlet Context in React Router Dom']},      
    ],
    answer:[
      {text:[
        'can send the object { key:"value"} to nesting component',
        '💻 (App.js)',
      ]},
      {code:[
        '<Route path="/books" element={<BookLayout />} >',
        '   <Route index element={<Books />} />',
        '   <Route path="one" element={<one />} />',
        '   <Route path="two" element={<two />} />',
        '   <Route path="three" element={<three />} />',
        '</Route>',
      ]},
      {text:[
        '💻 (BookLayout.js)',
      ]},
      {code:[
        'import { Link, Outlet } from "react-router-dom"',
        'export function BookLayout() {',
        '   return (',
        '     <>',
        '     <Link to="/books/one">Book 1</Link>',
        '     <Link to="/books/two">Book 2</Link>',
        '     <Link to="/books/three">Book 3</Link>',
        '     <Outlet context={{ key:"value"}} />',      
        '     </>',
        '   )',
        '}',
      ]},
      {text:[
        'and use this value in every nested componentlike this:',
        '💻 (one.js)',
      ]},
      {code:[
        'import { useOutletContext } from "react-router-dom"',
        'const obj = useOutletContext()'
      ]}
    ]
  },
  {
    session: '2',
    id: crypto.randomUUID(),
    question:[
      {header:['Routes']},
      {text:['Multiple Routes']},
    ],
    answer:[
      {header:['<Routes>']},
      {text:[
        'For showing specific content in specific location, we can use multiple Routes',
        'For example in below code, show "Extra Content" above "Home" and "Books" components (Because use location)',
      ]},
      {code:[
        '<Routes location="/books">',
        '   <Route path="/books" element={<h1>Extra Content</h1>} />',
        '</Routes>',
        '<Routes>',
        '   <Route path="/" element={<Home />} />',
        '   <Route path="/books" element={<Books />} />',
        '</Routes>',
      ]},
      {text:[
        'And in below code, show "Extra Content" above "Books" components',
        'Use Case: use for different sidebar in specific url',
      ]},
      {code:[
        '<Routes>',
        '   <Route path="/books" element={<h1>Extra Content</h1>} />',
        '</Routes>',
        '<Routes>',
        '   <Route path="/" element={<Home />} />',
        '   <Route path="/books" element={<Books />} />',
        '</Routes>'
      ]},
    ]
  },
  {
    session: '2',
    id: crypto.randomUUID(),
    question:[
      {header:['* in React Router Dom']},
      {text:['star']},
    ],
    answer:[
      {header:['Not Found (404)']},
      {text:[
        'This Route(<Route path="*") matches literly any type in url that not match any define routes',
        'when we want to use Component for nested route, we must use * like this(<Route path="/books/*") . BookRoutes Component return <Routes>',
      ]},      
    ]
  },
  {
    session: '2',
    id: crypto.randomUUID(),
    question:[
      {header:['<Link>']},
      {text:[
        'replace','reloadDocument','state'
      ]},      
    ],
    answer:[
      {header:['<Link to="/" Property>Home</Link>']},
      {text:[
        'Property=> replace: replace the previous link when we click on backward in browser. use case is for login page that the user don`t need to go back',
        'Property=> reloadDocument: when click on that link, entire page is reloading',
        'Property=> state={ }: is not show on the url and get passing any times that click on it',
        'and on the destination, we can use it in this way:'
      ]},
      {code:[
        'import { useLocation } from "react-router-dom"',
        'const location = useLocation()',
        '{location.state}',
      ]},
    ]
  },
  {
    session: '2',
    id: crypto.randomUUID(),
    question:[
      {header:['useSearchParams in React Router Dom']},
    ],
    answer:[
      {text:[
        'use the query param at the end of URL like ?n=3',
        'this is the Hook'
      ]},
      {code:[
        'import { useSearchParams } from "react-router-dom"',
        ' ',
        'export function BookLayout(){',
        ' const [SearchParams, setSearchParams]= useSearchParams({n:3})',
        ' const number = SearchParams.get("n")',
        ' return (',
        '   <>',
        '     <input type="number" value={number} onchange={e => setSearchParams({ n: e.target.value })} />',
        '   </>',
        ' )',
        '}'
      ]},
    ]
  },
  {
    session: '2',
    id: crypto.randomUUID(),
    question:[
      {header:['Navigate in React Router Dom']},
      {text:['Navigate','useNavigate']},
    ],
    answer:[
      {text:[
        '<Navigate to="/"> is the component like Link component and navigate to the link',
        'useNavigate is hooks and i use it in NotFound.jsx',      
        'navigate("URL",options) that the options like Link components like "replace"',
        '🌟',
        '🌟Tips: navigate(-1) can takes negative numbers like -1 that simulate the back button on browser'
      ]},
      {code:[
        'import { Navigate, useNavigate } from "react-router-dom"',
        'const navigate=useNavigate()'
      ]},     
    ]
  },

  {
    session: '2',
    questionHeader: 'Outlet in React Router Dom',
    question: ['Nesting Route','Layout','context'],
    answerCode:
    [
      '💻 (App.js)',
      '<Route path="/books" element={<BookLayout />} >',
      '   <Route index element={<Books />} />',
      '   <Route path="one" element={<one />} />',
      '   <Route path="two" element={<two />} />',
      '   <Route path="three" element={<three />} />',
      '</Route>',
      ' ',
      '💻 (BookLayout.js)',
      'import { Link, Outlet } from "react-router-dom"',
      'export function BookLayout() {',
      '   return (',
      '     <>',
      '     <Link to="/books/one">Book 1</Link>',
      '     <Link to="/books/two">Book 2</Link>',
      '     <Link to="/books/three">Book 3</Link>',
      '     <Outlet />',
      '     </>',
      '   )',
      '}',
    ],
    answer: [
      'For share the code with the components inside nesting route like second navigator bar:',      
      '🌟Tips: we can remove path from first Route (path="/books") and just wrap some routes for sharing the code(<BookLayout />) with components',      
      ]
  }
]