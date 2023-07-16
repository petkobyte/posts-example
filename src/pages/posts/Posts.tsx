import React, { useEffect } from 'react';

export const Posts = () => {
  useEffect(() => {
    console.log('POSTS');
  }, []);

  return (
    <div>
      <p>Posts</p>
    </div>
  );
};
