import React, {Suspense} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import TopNavigation from '@cloudscape-design/components/top-navigation';
import AppLayout from '@cloudscape-design/components/app-layout';


import './styles.css';
import {Container, ContentLayout, Header } from '@cloudscape-design/components';
// const loading = <div>화면을 불러오는 중 입니다.</div>
const loading = React.createElement('div', null, '화면을 불러오는 중 입니다.');


// Containers
const Home = React.lazy(() => import('./pages/home/Home'))
const Flavors = React.lazy(() => import('./pages/flavors/Flavors'))

// Pages
const Page404 = React.lazy(() => import('./pages/page404/Page404'))
const Page500 = React.lazy(() => import('./pages/page500/Page500'))

//컴포넌트
const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={loading}>
                <TopNavigation
                    identity={{
                        logo: { src: '/logo.svg', alt: 'Chocolate Factory Logo' },
                        title: 'White Base Project',
                        href: '/index.html'
                    }}
                    i18nStrings={{
                        overflowMenuTriggerText: 'More',
                        overflowMenuTitleText: 'All',
                    }}
                />
                <Routes>
                    <Route path="/404" element={<Page404 />} />
                    <Route path="/500" element={<Page500 />} />
                    <Route path="/*" element={<Home />} />
                    <Route path="/flavors" element={<Flavors />} />
                    
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default App
