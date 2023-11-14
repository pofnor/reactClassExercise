import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import routes from './data/routes'
import { ThemeProvider, createTheme } from '@mui/material'
import 'bootstrap/dist/css/bootstrap.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App () {
  return (
    <ThemeProvider theme={darkTheme}>
      <NavBar />
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
    </ThemeProvider>
  )
}

export default App
