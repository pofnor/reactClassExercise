import NotFound from '../pages/NotFound'
import S1 from '../pages/session/S1'
import S2 from '../pages/session/S2'
import S3 from '../pages/session/S3'
import S4 from '../pages/session/S4'
import S5 from '../pages/session/S5'
import S6 from '../pages/session/S6'
import S7 from '../pages/session/S7'
import S8 from '../pages/session/S8'
import S9 from '../pages/session/S9'
import S10 from '../pages/session/S10'
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
    path: '/s3',
    element: S3
  },
  {
    path: '/s4',
    element: S4
  },
  {
    path: '/s5',
    element: S5
  },
  {
    path: '/s6',
    element: S6
  },
  {
    path: '/s7',
    element: S7
  },
  {
    path: '/s8',
    element: S8
  },
  {
    path: '/s9',
    element: S9
  },
  {
    path: '/s10',
    element: S10
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
