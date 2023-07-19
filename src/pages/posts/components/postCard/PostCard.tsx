import React from 'react';
import './styles.scss';
import { PostCardProps } from './models';
import Card from '../../../../components/card/Card';
import { useNavigate } from 'react-router-dom';
import { Comments } from '../comments';
import { HELLO } from '../../../../constants/hello';
import { withHelloLogging } from '../../../../hoc/loggingHoc';
import PostContent from '../postContent/PostContent';

export const PostCard = (props: PostCardProps) => {
  const navigate = useNavigate();
  const { post, userName } = props;
  const { id, title, body } = post;

  return (
    <Card key={id} hello={HELLO}>
      <div
        className='card-action'
        onClick={() => navigate(`/posts/${post.id}`, { state: { ...post, userName } })}
      >
        <PostContent title={title} body={body} name={userName} hello={HELLO} />
      </div>
      <Comments postId={id} hello={HELLO} />
    </Card>
  );
};

export default withHelloLogging(PostCard, 'PostCard');
