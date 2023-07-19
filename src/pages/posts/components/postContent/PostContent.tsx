import React from 'react';
import './styles.scss';
import { PostContentProps } from './models';

export const PostContent = (props: PostContentProps) => {
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
