import React from 'react';
import { useGetPosts } from './hooks/getPostsHook';
import { PostModel } from '../models/postModel';
import { useGetUsers } from './hooks/getUsersHook';
import { UserModel } from '../models/userModel';
import { PostCard } from '../components/postCard';

const Posts = () => {
  const { isLoading: isLoadingPosts, error: postsError, data: posts } = useGetPosts();
  const { isLoading: isLoadingUsers, error: usersError, data: users } = useGetUsers();

  if (isLoadingPosts || isLoadingUsers) return <div>Loading...</div>;
  if (postsError || usersError) {
    return (
      <div>
        {postsError ? postsError.message : ''} {usersError ? usersError.message : ''}
      </div>
    );
  }

  const renderPosts = () => {
    return posts?.map((post: PostModel) => {
      const { id, userId } = post;
      const user: UserModel | undefined = users?.find((user: UserModel) => user.id === userId);

      return <PostCard key={id} post={post} userName={user ? user.name : ''} />;
    });
  };

  return <>{renderPosts()}</>;
};

export default Posts;
