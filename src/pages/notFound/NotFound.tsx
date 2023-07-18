import React from 'react';
import image404 from '../../resources/images/panic404.png';

export const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <h3>Page not found!</h3>
      <img src={image404} alt='404' width={200} />
    </div>
  );
};
