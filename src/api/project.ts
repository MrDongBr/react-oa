
import http from '@/utils/http';
import {DataType,ProjectList} from '@/types/project';

// 获取项目列表
export const getProjectListApi = () => {
    return http.get<ProjectList>('/project');
}

// 创建项目
export const createProjectApi = (data: any) => {
    return http.post('/project', data);
}
// 删除项目 
export const deleteProjectApi = (id: string) => {
    return http.delete(`/project/${id}`);
}
// 编辑项目
export const editProjectApi = (id: string, data: any) => {
    return http.put(`/project/${id}`, data);
}



