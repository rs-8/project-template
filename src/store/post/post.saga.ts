import { takeLatest, call, put, fork } from 'redux-saga/effects';
import { createPostService, getAllPostsService } from '../../domain/post/service/post.service';
import { postSlice, postsSlice } from './post.slice';

export function* workerCreatePost(action) {
    try {
        const response = yield call(createPostService, action.payload);
        yield put(postSlice.actions.createPostSucceeded(response));
    } catch (error) {
        yield put(postSlice.actions.createPostFailed(error));
    }
}

export function* watcherCreatePost() {
    yield takeLatest(postSlice.actions.createPostRequested.type, workerCreatePost);
}

export function* workerGetAllPosts() {
    try {
        const response = yield call(getAllPostsService);
        yield put(postsSlice.actions.fetchPostsSucceeded(response));
    } catch (error) {
        yield put(postsSlice.actions.fetchPostsFailed(error));
    }
}

export function* watcherGetAllPosts() {
    yield takeLatest(postsSlice.actions.fetchPostsRequested.type, workerGetAllPosts);
}

export const postSagas = [
    fork(watcherCreatePost),
    fork(watcherGetAllPosts)
]