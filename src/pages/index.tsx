import React, { FC, useCallback, useEffect } from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import CreatePost from '../features/Home/CreatePost';
import Posts from '../features/Home/Posts';
import { CreatePostDTO } from '../domain/post/dto/create-post-dto';
import { AppDispatch, RootState } from '../core/base/rootState';
import { postSlice, postsSlice } from '../domain/post/state/post.state';

const StyledContainer = styled.div``;

const IndexPage: FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const posts = useSelector((state: RootState) => state.posts.data)

    useEffect(() => {
        dispatch(postsSlice.actions.fetchPostsRequested())
    }, [])

    const handlePostCreate = useCallback(async (post: CreatePostDTO) => {
        dispatch(postSlice.actions.createPostRequested(post))
    }, []);

    return (
        <StyledContainer>
            <CreatePost onCreatePost={handlePostCreate} />
            <Posts posts={posts} />
        </StyledContainer>
    )
};

export default IndexPage;