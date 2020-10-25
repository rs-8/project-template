import { PostEntity, PostModel } from "../types/post.types";

export interface IPostTransformer {
    toModel(param: PostEntity): PostModel;
}

export const PostTransformer = {
    toModel(param: PostEntity): PostModel {
        return {
            id: param.id,
            userId: param.userId,
            title: param.title,
            body: param.body,
            isOdd: param.id % 2 === 0
        }
    }
}