import React from 'react';
import { Card } from '../../../components/card';
import { PostContainer } from '../components/postContainer';
import { useGetPosts } from './hooks/getPostsHook';
import { PostModel } from '../models/postModel';
import { useGetUsers } from './hooks/getUsersHook';
import { UserModel } from '../models/userModel';
import { Comments } from '../components/comments/Comments';

const Posts = () => {
  const { isLoading: isLoadingPosts, error: postsError, data: posts } = useGetPosts();
  const { isLoading: isLoadingUsers, error: usersError, data: users } = useGetUsers();

  if (isLoadingPosts || isLoadingUsers) return <div>Loading...</div>;
  if (postsError || usersError)
    return (
      <div>
        {postsError ? postsError.message : ''} {usersError ? usersError.message : ''}
      </div>
    );

  const renderPosts = () => {
    return posts?.map((post: PostModel) => {
      const { id, title, body, userId } = post;
      const user: UserModel | undefined = users?.find((user: UserModel) => user.id === userId);

      return (
        <Card key={id}>
          <PostContainer title={title} body={body} name={user ? user.name : ''} />
          <Comments postId={id} />
        </Card>
      );
    });
  };

  return <>{renderPosts()}</>;
};

export default Posts;
