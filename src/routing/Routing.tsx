import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loading } from '../components/loading';
const Posts = lazy(() => import('../pages/posts/posts/Posts'));
const Post = lazy(() => import('../pages/posts/post/Post'));
const Home = lazy(() => import('../pages/home/Home'));
const NotFound = lazy(() => import('../pages/notFound/NotFound'));

export const Routing = () => {
  return (
    <Suspense fallback={<Loading size={'2xl'} />}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='posts'>
          <Route index={true} element={<Posts />} />
          <Route path=':id' element={<Post />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
