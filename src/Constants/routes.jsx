import NotFound from '../Pages'
import S1 from '../Pages/ReactSession'
import Dashboard from '../Pages/Dashboard'

export default [
  {
    path: '/',
    element: Dashboard,    
  },
  {
    path: '/s1',
    element: S1,
  },
  {
    path: '*',
    element: NotFound,    
  },
]