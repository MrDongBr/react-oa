import React, {Children, lazy} from 'react'
import Login from '@/pages/Login'
const Main = lazy(() => import('@/pages/Main'))

const Index = lazy(() => import('@/pages/Index'))
const Admin = lazy(() => import('@/pages/DataMgmt/Admin'))
const CreateProject = lazy(() => import('@/pages/DataMgmt/CreateProject'))
const FullTextSearching = lazy(() => import('@/pages/DataRetrieval/FullTextSearching'))

const lazyRoute = (Component:JSX.Element) =>{
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            {Component}
        </React.Suspense>
    )
}
const router = [
    {
        path: '/',
        element:  <Login />
    },
    {
        path: '/app',
        element:  lazyRoute(<Main />),
        children: [
            {
                path: 'index',
                element: lazyRoute(<Index />),
            },
            {
                path: 'dataMgmt/createProject',
                element: lazyRoute(< CreateProject/>),
            },
            {
                path: 'dataMgmt/admin',
                element: lazyRoute(< Admin/>),
            },
            {
                path: 'dataRetrieval/fullTextSearch',
                element: lazyRoute(<FullTextSearching />),
            }
        ]
    },
    {
        path: '*',
        element: <div>404</div>
    }

]

export default router