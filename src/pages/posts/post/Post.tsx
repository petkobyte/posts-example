import React, { useEffect, useState } from 'react';
import { PostCard } from '../components/postCard';
import { useLocation, useParams } from 'react-router-dom';
import { PostModel } from '../models/postModel';
import { useGetPost } from '../posts/hooks/getPostHook';
import { useGetUser } from '../posts/hooks/getUserHook';
import { PostsModel } from '../models';
import Loading from '../../../components/loading/Loading';
import { HELLO } from '../../../constants/hello';
import { withHelloLogging } from '../../../hoc/loggingHoc';

const Post = (props: PostsModel) => {
  const location = useLocation();
  const { id } = useParams();

  const [post, setPost] = useState<PostModel>({ id: -1, title: '', body: '', userId: -1 });
  const [name, setName] = useState<string>('');
  const [userId, setUserId] = useState<number | undefined>(undefined);

  const {
    isLoading: isLoadingPost,
    error: errorPost,
    data: postData,
    refetch: fetchPost,
  } = useGetPost(Number(id));

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: userData,
    refetch: fetchUser,
  } = useGetUser(userId!);

  useEffect(() => {
    if (!location.state) {
      fetchPost();
      return;
    }

    const { id, title, body, userId, userName } = location.state;
    setPost({ id, title, body, userId });
    setName(userName);
  }, [location.state]);

  useEffect(() => {
    if (postData) {
      setPost(postData);
      setUserId(postData.userId);
    }
  }, [postData]);

  useEffect(() => {
    if (userId) {
      fetchUser();
    }
  }, [userId]);

  useEffect(() => {
    if (userData) {
      setName(userData.name);
    }
  }, [userData]);

  if (isLoadingPost || isLoadingUser) return <Loading size={'2xl'} hello={HELLO} />;
  if (errorPost || errorUser) {
    return (
      <div>
        {errorPost ? errorPost.message : ''} {errorUser ? errorUser.message : ''}
      </div>
    );
  }

  return (
    <div>
      <PostCard post={post} userName={name} hello={HELLO} />
    </div>
  );
};

export default withHelloLogging(Post, 'Post');
