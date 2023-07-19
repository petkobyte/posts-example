import React, { ChangeEvent, useEffect, useState } from 'react';
import { useGetPosts } from './hooks/getPostsHook';
import { PostModel } from '../models/postModel';
import { useGetUsers } from './hooks/getUsersHook';
import { UserModel } from '../models/userModel';
import { PostCard } from '../components/postCard';
import { Input } from '../../../components/input';
import { useDebounce } from '../../../hooks/useDebounce';
import { useTranslation } from 'react-i18next';
import { Loading } from '../../../components/loading/Loading';

const Posts = () => {
  const { t } = useTranslation();
  const { isLoading: isLoadingPosts, error: postsError, data: posts } = useGetPosts();
  const { isLoading: isLoadingUsers, error: usersError, data: users } = useGetUsers();

  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredPosts, setFilteredPosts] = useState<PostModel[]>(posts ? posts : []);
  const debouncedSearchValue = useDebounce(searchValue, 1000);

  useEffect(() => {
    setFilteredPosts(filterPosts(extractUserIds(filterUsers(debouncedSearchValue))));
  }, [debouncedSearchValue]);

  useEffect(() => {
    if (posts) {
      setFilteredPosts(posts);
    }
  }, [posts]);

  const filterUsers = (searchValue: string): UserModel[] => {
    let updatedUsers: UserModel[] = users ? [...users] : [];
    updatedUsers = updatedUsers.filter((user: UserModel) => {
      return user.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    });

    return updatedUsers;
  };

  const filterPosts = (users: number[]): PostModel[] => {
    return posts?.filter((post: PostModel) => users.includes(post.userId)) || [];
  };

  const extractUserIds = (users: UserModel[]): number[] => {
    const userIds: number[] = users.map((user: UserModel) => user.id);
    return userIds;
  };

  if (isLoadingPosts || isLoadingUsers) return <Loading size={'2xl'} />;
  if (postsError || usersError) {
    return (
      <div>
        {postsError ? postsError.message : ''} {usersError ? usersError.message : ''}
      </div>
    );
  }

  const renderPosts = () => {
    return filteredPosts.map((post: PostModel) => {
      const { id, userId } = post;
      const user: UserModel | undefined = users?.find((user: UserModel) => user.id === userId);

      return <PostCard key={id} post={post} userName={user ? user.name : ''} />;
    });
  };

  return (
    <>
      <Input
        type='text'
        value={searchValue}
        placeholder={t('res_searchByName')}
        name={'search-posts-input'}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
        disabled={!posts}
      />
      {filteredPosts.length ? renderPosts() : <>{t('res_noSearchResults')}</>}
    </>
  );
};

export default Posts;
