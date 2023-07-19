import React, { useEffect, useState } from 'react';
import Accordion from '../../../../components/accordion/Accordion';
import { useTranslation } from 'react-i18next';
import { CommentsProps } from './models';
import { useGetComments } from '../../posts/hooks/getCommentsHook';
import { CommentModel } from '../../models/commentModel';
import Card from '../../../../components/card/Card';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { HELLO } from '../../../../constants/hello';
import { withHelloLogging } from '../../../../hoc/loggingHoc';

export const Comments = (props: CommentsProps) => {
  const { t } = useTranslation();
  const { postId } = props;
  const [isActive, setIsActive] = useState(false);

  const { error, data: comments, refetch: fetchComments } = useGetComments(postId);

  // TODO: handle error

  const onExpand = () => {
    if (comments) {
      if (comments![0].postId === postId) {
        setIsActive(!isActive);
        return;
      }
    }

    fetchComments();
  };

  useEffect(() => {
    if (comments) {
      setIsActive(comments[0].postId === postId);
    }
  }, [comments]);

  const renderComments = () => {
    return comments?.map((comment: CommentModel) => {
      const { id, name, body } = comment;
      return (
        <div key={id} className='comment-container'>
          <Card hello={HELLO}>
            <div className='comment-user'>
              <FontAwesomeIcon icon={faUserCircle} size='xl' className='comment-user-icon' />
              <h4>{name}</h4>
            </div>

            <div>{body}</div>
          </Card>
        </div>
      );
    });
  };

  return (
    <Accordion title={t('res_comments')} isActive={isActive} onClick={onExpand} hello={HELLO}>
      {renderComments()}
    </Accordion>
  );
};

export default withHelloLogging(Comments, 'Comments');
