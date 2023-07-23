import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';
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
import NoResults from '../../../components/noResults/NoResults';
import { useNavigate, useParams } from 'react-router-dom';

const Posts = (props: PostsModel) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
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

  const handleNavigate = (post: PostModel, userName: string) => {
    navigate(`/posts/${post.id}`, { state: { ...post, userName } });
  };

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

  const renderPosts = (): JSX.Element[] => {
    return filteredPosts.map((post: PostModel) => {
      const { id, userId } = post;
      const user: UserModel | undefined = users?.find((user: UserModel) => user.id === userId);

      return (
        <PostCard
          key={id}
          post={post}
          userName={user ? user.name : ''}
          onClick={handleNavigate}
          hello={HELLO}
        />
      );
    });
  };

  const postsToRender: JSX.Element[] = useMemo(() => {
    return renderPosts();
  }, [filteredPosts]);

  const PostsContent = () => (
    <>
      {filteredPosts.length ? (
        postsToRender
      ) : (
        <NoResults text={t('res_noSearchResults')} hello={HELLO} />
      )}
    </>
  );

  const PostsContentWithLoading = withLoadingAndErrorHOC(
    PostsContent,
    isLoadingPosts || isLoadingUsers,
    !!postsError || !!usersError,
  );

  return (
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
      <PostsContentWithLoading hello={HELLO} />
    </>
  );
};

export default withHelloLogging(Posts, 'Posts');
