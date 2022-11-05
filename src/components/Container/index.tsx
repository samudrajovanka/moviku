import type { ContainerProps } from './types';

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`mx-auto max-w-[1240px] ${className}`}
      style={{
        width: 'calc(100% - 32px)'
      }}
    >
      {children}
    </div>
  );
};

export default Container;
