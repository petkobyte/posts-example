import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HELLO } from '../constants/hello';
import Loading from '../components/loading/Loading';
const Posts = lazy(() => import('../pages/posts/posts/Posts'));
const Post = lazy(() => import('../pages/posts/post/Post'));
const Home = lazy(() => import('../pages/home/Home'));
const NotFound = lazy(() => import('../pages/notFound/NotFound'));

export const Routing = () => {
  return (
    <Suspense fallback={<Loading size={'2xl'} hello={HELLO} />}>
      <Routes>
        <Route path='/' element={<Home hello={HELLO} />} />
        <Route path='posts'>
          <Route index={true} element={<Posts hello={HELLO} />} />
          <Route path=':id' element={<Post hello={HELLO} />} />
        </Route>
        <Route path='*' element={<NotFound hello={HELLO} />} />
      </Routes>
    </Suspense>
  );
};
