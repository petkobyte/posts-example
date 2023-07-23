import React from 'react';
import './styles.scss';
import { PostCardProps } from './models';
import Card from '../../../../components/card/Card';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { Comments } from '../comments';
import { HELLO } from '../../../../constants/hello';
import { withHelloLogging } from '../../../../hoc/loggingHoc';
import PostContent from '../postContent/PostContent';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

export const PostCard = (props: PostCardProps) => {
  const { t } = useTranslation();
  const { post, userName, onClick } = props;
  const { id, title, body } = post;

  const handleClick = () => {
    if (onClick) {
      onClick(post, userName);
    }
  };

  return (
    <Card key={id} hello={HELLO}>
      // TODO: create a button type clickable area component to make it focusable
      <div className={`${onClick ? 'card-action' : ''}`} onClick={handleClick}>
        <PostContent title={title} body={body} name={userName} hello={HELLO} />
      </div>
      <Comments postId={id} hello={HELLO} />
      {!onClick && (
        <NavLink to='/posts'>
          <FontAwesomeIcon icon={faChevronCircleLeft} className='back-icon' size='lg' />
          {t('res_backToPosts')}
        </NavLink>
      )}
    </Card>
  );
};

export default withHelloLogging(PostCard, 'PostCard');
