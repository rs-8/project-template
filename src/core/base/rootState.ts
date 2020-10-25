import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { postSlice, postsSlice } from '../../domain/post/state/post.state';
import { postSagas } from '../../domain/post/saga/post.saga';

function* getSagas() {
    yield all([
        ...postSagas
    ]);
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
    ...getDefaultMiddleware({
        thunk: false,
        serializableCheck: false,
    }),
    sagaMiddleware,
];

if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);

    middlewares.push(logger);
}

const rootReducer = combineReducers({
    post: postSlice.reducer,
    posts: postsSlice.reducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
});

sagaMiddleware.run(getSagas);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;