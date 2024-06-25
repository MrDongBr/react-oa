import React, {Children, lazy} from 'react'
const Login = lazy(() => import('@/pages/Login'))
const Main = lazy(() => import('@/pages/Main'))

const Index = lazy(() => import('@/pages/Index'))
const Admin = lazy(() => import('@/pages/DataMgmt/Admin'))
const CreateProject = lazy(() => import('@/pages/DataMgmt/CreateProject'))

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
        element:  lazyRoute(<Login />)
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
                path: 'data-create-project',
                element: lazyRoute(<Admin />),
            },
            {
                path: 'data-admin',
                element: lazyRoute(<CreateProject />),
            }
        ]
    },
    {
        path: '*',
        element: <div>404</div>
    }

]

export default router