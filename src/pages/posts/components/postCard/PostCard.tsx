import React from 'react';
import './styles.scss';
import { PostCardProps } from './models';
import { Card } from '../../../../components/card';
import { useNavigate } from 'react-router-dom';
import { PostContent } from '../postContent';
import { Comments } from '../comments';

export const PostCard = (props: PostCardProps) => {
  const navigate = useNavigate();
  const { post, userName } = props;
  const { id, title, body } = post;

  return (
    <Card key={id}>
      <div
        className='card-action'
        onClick={() => navigate(`/posts/${post.id}`, { state: { ...post, userName } })}
      >
        <PostContent title={title} body={body} name={userName} />
      </div>
      <Comments postId={id} />
    </Card>
  );
};
