import React, { useEffect } from 'react';
import { Card } from '../../../components/card';
import { PostContainer } from '../components/postContainer';

export const Posts = () => {
  useEffect(() => {
    console.log('POSTS');
  }, []);

  return (
    <div>
      <>
        <Card>
          <PostContainer />
        </Card>
        <Card>
          <PostContainer />
        </Card>
        <Card>
          <PostContainer />
        </Card>

        <Card>
          <PostContainer />
        </Card>
        <Card>
          <PostContainer />
        </Card>
        <Card>
          <PostContainer />
        </Card>

        <Card>
          <PostContainer />
        </Card>
        <Card>
          <PostContainer />
        </Card>
        <Card>
          <PostContainer />
        </Card>

        <Card>
          <PostContainer />
        </Card>
        <Card>
          <PostContainer />
        </Card>
        <Card>
          <PostContainer />
        </Card>

        <Card>
          <PostContainer />
        </Card>
        <Card>
          <PostContainer />
        </Card>
        <Card>
          <PostContainer />
        </Card>
      </>
    </div>
  );
};
