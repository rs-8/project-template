import { http, HttpClient } from "../../../core/base/http";
import { PostEntity } from "../model/post.entity";
import { CreatePostDTO } from "../dto/create-post-dto";

export const createPostService = async (post: CreatePostDTO): Promise<PostEntity> => {
    try {
        const resp = await http.post(`/posts`, post);
        return resp.data;
    } catch (error) {
        throw new Error(error);
    }
}

export const getAllPostsService = async (): Promise<PostEntity[]> => {
    try {
        const resp = await http.get('/posts');
        return resp.data;
    } catch (error) {
        throw new Error(error);
    }
}

export const getPostService = async (id: string): Promise<PostEntity> => {
    try {
        const resp = await http.get(`/posts/${id}`);
        return resp.data;
    } catch (error) {
        throw new Error(error);
    }
}