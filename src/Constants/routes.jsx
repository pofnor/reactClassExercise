import NotFound from '../Pages/NotFound'
import S1 from '../Pages/ReactSession/S1'
import Dashboard from '../Pages/Dashboard/Dashboard'

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
    path: '*',
    element: NotFound
  }
]
