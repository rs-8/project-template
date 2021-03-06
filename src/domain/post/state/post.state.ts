import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostModel } from '../types/post.types';
import { PostTransformer } from '../transform/post.transformer';
import { CreatePostDTO } from '../dto/create-post-dto';
import { PostEntity } from '../types/post.types';

type PostState = {
    isFetching: boolean;
    data: PostModel;
    error: any;
}

type PostsState = {
    isFetching: boolean;
    data: PostModel[];
    error: any;
}

const initialPostState: PostState = {
    isFetching: false,
    data: null,
    error: null,
};

const initialPostsState: PostsState = {
    isFetching: false,
    data: [],
    error: null,
};

export const postSlice = createSlice({
    name: 'post',
    initialState: initialPostState,
    reducers: {
        createPostRequested(state, action: PayloadAction<CreatePostDTO>) {},
        createPostSucceeded(state, action: PayloadAction<PostEntity>) {
            state.data = PostTransformer.toModel(action.payload);
        },
        createPostFailed(state, action: PayloadAction<{ error: any }>) {
            state.error = action.payload.error;
        }
    }
});

export const postsSlice = createSlice({
    name: 'posts',
    initialState: initialPostsState,
    reducers: {
        fetchPostsRequested(state) {
            state.isFetching = true;
        },
        fetchPostsSucceeded(state, action: PayloadAction<PostEntity[]>) {
            state.isFetching = false;
            state.data = action.payload.map(PostTransformer.toModel);
        },
        fetchPostsFailed(state, action: PayloadAction<{ error: any }>) {
            state.isFetching = false;
            state.error = action.payload.error;
        }
    }
});