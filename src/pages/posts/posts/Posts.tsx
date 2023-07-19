import React, { ChangeEvent, useEffect, useState } from 'react';
import { useGetPosts } from './hooks/getPostsHook';
import { PostModel } from '../models/postModel';
import { useGetUsers } from './hooks/getUsersHook';
import { UserModel } from '../models/userModel';
import { PostCard } from '../components/postCard';
import { useDebounce } from '../../../hooks/useDebounce';
import { useTranslation } from 'react-i18next';
import { HELLO } from '../../../constants/hello';
import Input from '../../../components/input/Input';
import { PostsModel } from '../models';
import { withHelloLogging } from '../../../hoc/loggingHoc';
import { withLoadingAndErrorHOC } from '../../../hoc/loadingAndErrorHOC';

const Posts = (props: PostsModel) => {
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

  const renderPosts = () => {
    return filteredPosts.map((post: PostModel) => {
      const { id, userId } = post;
      const user: UserModel | undefined = users?.find((user: UserModel) => user.id === userId);

      return <PostCard key={id} post={post} userName={user ? user.name : ''} hello={HELLO} />;
    });
  };

  const PostsContent = () => (
    <>
      <Input
        type='text'
        value={searchValue}
        placeholder={t('res_searchByName')}
        name={'search-posts-input'}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
        disabled={!posts}
        hello={HELLO}
      />
      {filteredPosts.length ? renderPosts() : <>{t('res_noSearchResults')}</>}
    </>
  );

  const PostsContentWithLoading = withLoadingAndErrorHOC(
    PostsContent,
    isLoadingPosts || isLoadingUsers,
    !!postsError || !!usersError,
  );
  withLoadingAndErrorHOC;

  return <PostsContentWithLoading hello={HELLO} />;
};

export default withHelloLogging(Posts, 'Posts');
