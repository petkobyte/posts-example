import React, { FC } from 'react';
import './styles.scss';
import { PostContainerProps } from './models';

export const PostContainer = (props: PostContainerProps) => {
  const { title, body, name } = props;
  return (
    <>
      <h4>{title}</h4>
      <p>by {name}</p>
      <hr />
      <p className='post-text'>{body}</p>
    </>
  );
};
