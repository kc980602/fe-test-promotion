import type { RouteObject } from 'react-router-dom'
import Home from '~/pages/Home'
import NotFound from '~/pages/NotFound'
import PromoDetail from '~/pages/PromoDetail'


const routes: RouteObject[] = [
  {
    path: '*',
    element: <NotFound />
  },
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'promo-detail',
    element: <PromoDetail />
  }
]

export default routes
