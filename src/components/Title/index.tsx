import cn from 'classnames';

import type { TitleProps } from './types';

const Title = ({ children, as: Component = 'h1', className }: TitleProps) => {
  return <Component className={cn('heading-1 text-green-500', className)}>{children}</Component>;
};

export default Title;
