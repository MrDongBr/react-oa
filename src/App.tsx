import { useEffect } from 'react';
import { useRoutes ,useLocation,useNavigate} from 'react-router-dom';
import router from './router';
import { ConfigProvider } from 'antd';
import {useSelector} from 'react-redux'

const ToRedirect = (props:{path:string}) => {
    const navigate = useNavigate()
    useEffect(()=>{
        navigate(props.path)
    },[])
    return <div></div>
}
const BeforeRouterEnter = () => {
    const outlet = useRoutes(router);
    const {token} = useSelector((state:any) => state.user)
    const location = useLocation()
    if(location.pathname ==='/' && token){
        return <ToRedirect path='/app/index'/>
    }
    if(location.pathname !=='/' && !token){
        return <ToRedirect path='/'/>
    }
    
    return outlet
}

const App = () => {
    const {themeConfig} = useSelector((state: any) => state.theme);
    return (
        <>
             
             <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: themeConfig.primary,
                        colorBgContainer: themeConfig.bgColor,
                    },
                }}
            >
                <div className="app"><BeforeRouterEnter /></div>
            </ConfigProvider>
        </>
        
    );
};

export default App;
