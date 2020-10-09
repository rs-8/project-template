import { all } from 'redux-saga/effects';
import { postSagas } from './post/post.saga'

export default function* getSagas() {
    yield all([
        ...postSagas
    ]);
}