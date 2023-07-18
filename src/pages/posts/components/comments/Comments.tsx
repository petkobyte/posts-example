import React, { useEffect, useState } from 'react';
import { Accordion } from '../../../../components/accordion';
import { useTranslation } from 'react-i18next';
import { CommentsProps } from './models';
import { useGetComments } from '../../posts/hooks/getCommentsHook';
import { CommentModel } from '../../models/commentModel';
import { Card } from '../../../../components/card';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleUp,
  faUser,
  faUserAlt,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

export const Comments = (props: CommentsProps) => {
  const { t } = useTranslation();
  const { postId } = props;
  const [isActive, setIsActive] = useState(false);

  const { isLoading, error, data: comments, refetch: fetchComments } = useGetComments(postId);

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
  }, comments);

  const renderComments = () => {
    return comments?.map((comment: CommentModel) => {
      const { id, name, body } = comment;
      return (
        <div key={id} className='comment-container'>
          <Card>
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
    <Accordion title={t('res_comments')} isActive={isActive} onClick={onExpand}>
      {renderComments()}
    </Accordion>
  );
};
