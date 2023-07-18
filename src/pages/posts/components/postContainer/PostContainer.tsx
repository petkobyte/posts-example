import React, { FC } from 'react';
import './styles.scss';
import { PostContainerProps } from './models';

export const PostContainer = (props: PostContainerProps) => {
  const { title, body, name } = props;
  return (
    <>
      <h3>{title}</h3>
      <p>by {name}</p>
      <hr />
      <p className='post-text'>{body}</p>
    </>
  );
};
