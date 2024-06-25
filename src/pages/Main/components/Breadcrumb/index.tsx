import React,{useState} from 'react';
import { Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import config from './config';
import { title } from 'process';

interface BreadItem {
    path: string,
    title: string,
    children?: BreadItem[],
}

const getBreadData = (pathname:string,list:BreadItem [],target:BreadItem []) =>{
    list.forEach((item)=>{
        if(pathname.includes(item.path)){
            target.push(item);
            if(item.children){
                getBreadData(pathname,item.children,target)
            }
        }
    })
    return target;
}
const App: React.FC = () => {

    const {pathname} = useLocation();

    const [breadcrumbData,setBreadcrumbData] = useState([]);
    useEffect(() => {
        const data =  getBreadData(pathname,config,[]);
        let result: any[] = []
        data.forEach(item=>{
            result.push({
                title: item.title,
            })
        })
        setBreadcrumbData(result as never []);
    },[pathname])

    return (
        <Breadcrumb 
            style={{ lineHeight: '64px' }}
            items={breadcrumbData}
        />
    )
};

export default App;
