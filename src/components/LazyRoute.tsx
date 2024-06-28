import React from 'react'
import RouterLoading from './RouterLoading'
const LazyRoute = (Component:JSX.Element) =>{
    return (
        <React.Suspense fallback={<RouterLoading/>}>
            {Component}
        </React.Suspense>
    )
}

export default LazyRoute