import NavBar from './components/NavBar'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import routes from './data/routes'
import 'bootstrap/dist/css/bootstrap.css'
function App () {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          {
            routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.element/>}
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
