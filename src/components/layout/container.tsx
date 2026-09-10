import React from 'react';
import { ContainerProps } from '@/types';

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  as: Component = 'div',
}) => {
  return (
    <Component className={`mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 ${className}`}>
      {children}
    </Component>
  );
};
