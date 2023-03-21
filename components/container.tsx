import clsx from 'clsx';
import { ReactNode } from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={clsx('max-w-2xl md:max-w-4xl mx-auto', className)}>
      {children}
    </div>
  );
}
