import React, { ComponentType, PropsWithChildren } from 'react';
import { HelloModel } from '../models.ts/helloModel';

export function withHelloLogging<T extends HelloModel>(
  Component: ComponentType<T>,
  componentName: string,
) {
  const WrappedComponent = (props: PropsWithChildren<T>) => {
    console.log(`${props.hello} ${componentName}`);

    return <Component {...props} />;
  };

  return WrappedComponent;
}
