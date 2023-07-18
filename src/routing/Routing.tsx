import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Posts } from '../pages/posts/posts/Posts';
import { Post } from '../pages/posts/post/Post';
import { Home } from '../pages/home/Home';
import { NotFound } from '../pages/notFound/NotFound';

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='posts'>
          <Route index={true} element={<Posts />} />
          <Route path=':postId' element={<Post />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
