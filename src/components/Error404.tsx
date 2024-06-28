import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
const App: React.FC = () => {
    const navigate = useNavigate();
    const link = () => {
        navigate('/');
    };
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
                <Button type="primary" onClick={link}>
                    Back Home
                </Button>
            }
        />
    );
};

export default App;
