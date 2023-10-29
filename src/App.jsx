import NavBar from './Components/NavBar'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import routes from './Constants/routes'
import 'bootstrap/dist/css/bootstrap.css';
function App() {

  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          {
            routes.map((route,index)=>{
              const Element = route.element;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<Element/>}
                />                
              )
            })
          }

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
