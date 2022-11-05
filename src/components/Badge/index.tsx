import type { BadgeProps } from './types';

const Badge = ({ children }: BadgeProps) => {
  return (
    <div className="px-3 py-1 bg-black/40 rounded-lg backdrop-blur-sm flex gap-1 items-center">
      {children}
    </div>
  );
};

export default Badge;
