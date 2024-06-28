import { lazy } from 'react'
import Login from '@/pages/Login'
import lazyRoute from '@/components/LazyRoute'
import Error404 from '@/components/Error404'
const Main = lazy(() => import('@/pages/Main'))
const Index = lazy(() => import('@/pages/Index'))
const Admin = lazy(() => import('@/pages/DataMgmt/Admin'))
const CreateProject = lazy(() => import('@/pages/DataMgmt/CreateProject'))
const Upload = lazy(() => import('@/pages/DataMgmt/Upload'))
const FullTextSearching = lazy(() => import('@/pages/DataRetrieval/FullTextSearching'))


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
                path: 'dataMgmt/upload',
                element: lazyRoute(< Upload/>),
            },
            {
                path: 'dataRetrieval/fullTextSearch',
                element: lazyRoute(<FullTextSearching />),
            }
        ]
    },
    {
        path: '*',
        element: <Error404 />
    }

]

export default router