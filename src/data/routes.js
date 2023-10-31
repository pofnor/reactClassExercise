import NotFound from '../pages/NotFound'
import S1 from '../pages/S1'
import S2 from '../pages/S2'
import Dashboard from '../pages/Dashboard'
import Search from '../pages/Search'

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
    path: '/s2',
    element: S2
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
