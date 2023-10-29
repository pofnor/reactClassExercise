import NavBar from './Components/NavBar'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './app.css'
import routes from './Constants'
function App() {

  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          {
            routes.map((route,index)=>{
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={route.element}
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
