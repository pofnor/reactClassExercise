import NotFound from '../Pages/NotFound'
import S1 from '../Pages/ReactSession/S1'
import Dashboard from '../Pages/Dashboard/Dashboard'
import Search from '../Components/Search'

export default [
  {
    path: '/',
    element: Dashboard
  },
  {
    path: '/s1',
    element: S1
  },
  {
    path: '/search',
    element: Search
  },
  {
    path: '*',
    element: NotFound
  }
]
