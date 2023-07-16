import React, { useEffect } from 'react';

export const Post = () => {
  useEffect(() => {
    console.log('ONE POST');
  }, []);

  return (
    <div>
      <p>A post test test</p>
    </div>
  );
};
