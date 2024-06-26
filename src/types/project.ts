export interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

export interface ProjectList{
    result: number,
    data: DataType[]
}