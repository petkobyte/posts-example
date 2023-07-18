import React, { useEffect } from 'react';

const Post = () => {
  useEffect(() => {
    console.log('ONE POST');
  }, []);

  return (
    <div>
      <p>A post test test</p>
    </div>
  );
};

export default Post;
