import React, {Suspense} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

// const loading = <div>화면을 불러오는 중 입니다.</div>
const loading = React.createElement('div', null, '화면을 불러오는 중 입니다.');


// Containers
const DefaultLayout = React.lazy(() => import('./pages/home/Home'))

// Pages
const Page404 = React.lazy(() => import('./pages/page404/Page404'))
const Page500 = React.lazy(() => import('./pages/page500/Page500'))

//컴포넌트
const App: React.FC = () => {    return (
        <BrowserRouter>
            <Suspense fallback={loading}>
                <Routes>
                    <Route path="/404" element={<Page404 />} />
                    <Route path="/500" element={<Page500 />} />
                    <Route path="/*" element={<DefaultLayout />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default App
