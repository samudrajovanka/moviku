import useWindowSize from '@/hooks/useWindowSize';

const BREAKPOINT: { [key: number]: string } = {
  768: 'ipad',
  1024: 'desktop'
};

const useBreakpoint = () => {
  const { width } = useWindowSize();

  const breakpoint = Object.keys(BREAKPOINT).reduce((device, curr) => {
    if (typeof width === 'undefined') return device;

    if (width < parseInt(curr, 10)) {
      return device;
    }

    return BREAKPOINT[parseInt(curr, 10)];
  }, 'mobile');

  return breakpoint;
};

export default useBreakpoint;
