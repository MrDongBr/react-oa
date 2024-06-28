import React, { Component, ReactNode } from 'react';
import Error from './Error';
interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<{}, ErrorBoundaryState> {
    constructor(props: {}) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        // 更新状态以触发重新渲染
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        // 你可以在这里打印错误信息，或者发送到日志服务器
        console.error('捕获到错误: ', error, errorInfo);
    }

    render(): ReactNode {
        if (this.state.hasError) {
            // 在这里你可以渲染一个备用UI
            return <Error />;
        }

        // 当没有错误时，正常渲染子组件
        return this.props.children;
    }
}

export default ErrorBoundary;
