export interface PostEntity {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export interface PostModel {
    id: number;
    userId: number;
    title: string;
    body: string;
    isOdd: boolean;
}