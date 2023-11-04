import NotFound from '../pages/NotFound'
import Dashboard from '../pages/Dashboard'
import Search from '../pages/Search'
import SessionMaker from '../pages/session/SessionMaker'

export default [
  {
    path: '/',
    element: Dashboard
  },
  {
    path: '/session/:id',
    element: SessionMaker
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
