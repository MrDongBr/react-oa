import React, { useState } from 'react';
import { Divider , Drawer ,ColorPicker,Row,Col} from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import {setTheme} from '@/store/theme';
interface ThemeConfigProps {  
    open: boolean; 
    onClose: () => void; 
}
const ThemeConfig: React.FC<ThemeConfigProps> = ({open,onClose}) => {

    const {themeConfig} = useSelector((state: any) => state.theme);

    const dispatch = useDispatch();
    

    const [primary, setPrimary] = useState(themeConfig.primary);
    const [bgColor, setBgColor] = useState(themeConfig.bgColor);
    const changeMainColor = (color: any) => {
        setPrimary(color.toHexString())
        dispatch(setTheme({primary:color.toHexString()}))
    }

    const changeBgColor = (color: any) => {
        setBgColor(color.toHexString())
        dispatch(setTheme({bgColor:color.toHexString()}))
    }
    return (
        <>
            <Drawer title="主题配置"  open={open} onClose={onClose}>
                <Divider orientation="right" plain>
                    全局主题
                </Divider>
                <Row align="middle">
                    <Col span={12}>主题色</Col>
                    <Col span={12} >
                        <ColorPicker showText value={primary} onChangeComplete={changeMainColor} style={{float:'right'}} />
                    </Col>
                </Row>
                <Row align="middle">
                    <Col span={12}>表单背景色</Col>
                    <Col span={12} >
                        <ColorPicker showText value={bgColor} onChangeComplete={changeBgColor} style={{float:'right'}} />
                    </Col>
                </Row>
            </Drawer>
        </>
    );
};

export default ThemeConfig;
