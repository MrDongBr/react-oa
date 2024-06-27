import { Modal } from 'antd';

interface Config {
    title?: string;
    content: string;
    cancelText?: string;
    okText?: string; // 确认按钮文字
    onCancel?: () => void;
    onOk: () => void;
}

export const $confirm = (config: Config) => {
    Modal.confirm({
        className: 'confirm-modal-trolia',
        title: config.title || '提示',
        content: config.content,
        centered: true,
        closable: false,
        maskClosable: false,
        okText: config.okText || '确定',
        cancelText: config.cancelText || '取消',
        onOk: config.onOk,
        onCancel: config.onCancel || (()=>{}),
    });
};
