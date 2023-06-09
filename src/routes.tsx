import React from 'react'

const Home = React.lazy(() => import('./pages/home/Home'))
const Page404 = React.lazy(() => import('./pages/page404/Page404'))
const Page500 = React.lazy(() => import('./pages/page500/Page500'))
const Flavors = React.lazy(() => import('./pages/flavors/Flavors'))

const routes = [
    {path: '/', name: 'Home', element: Home},
    {path: '/Flavors', name: 'Flavors', element: Flavors},
    {path: '/404', name: '404', element: Page404},
    {path: '/500', name: '500', element: Page500},
]



export default routes
