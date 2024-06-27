import { useRoutes } from 'react-router-dom';
import router from './router';
import { ConfigProvider } from 'antd';
import {config} from '@/styles/theme/config'
const App = () => {
    const outlet = useRoutes(router);
    return (
        <ConfigProvider
            theme={{
                token: config,
            }}
        >
            <div className="app">{outlet}</div>
        </ConfigProvider>
    );
};

export default App;
