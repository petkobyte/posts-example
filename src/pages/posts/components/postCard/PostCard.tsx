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
  const navigate = useNavigate();
  const { id: urlId } = useParams();
  const { post, userName } = props;
  const { id, title, body } = post;

  const handleNavigate = () => {
    if (!urlId) {
      navigate(`/posts/${post.id}`, { state: { ...post, userName } });
    }
  };

  return (
    <Card key={id} hello={HELLO}>
      <div className={`${!urlId ? 'card-action' : ''}`} onClick={handleNavigate}>
        <PostContent title={title} body={body} name={userName} hello={HELLO} />
      </div>
      <Comments postId={id} hello={HELLO} />
      {urlId && (
        <NavLink to='/posts'>
          <FontAwesomeIcon icon={faChevronCircleLeft} className='back-icon' size='lg' />
          {t('res_backToPosts')}
        </NavLink>
      )}
    </Card>
  );
};

export default withHelloLogging(PostCard, 'PostCard');
