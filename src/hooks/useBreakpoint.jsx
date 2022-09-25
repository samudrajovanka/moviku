import useWindowSize from './useWindowSize';

const BREAKPOINT = {
  768: 'ipad',
  1024: 'desktop'
};

const useBreakpoint = () => {
  const { width } = useWindowSize();

  const breakpoint = Object.keys(BREAKPOINT).reduce((device, curr) => {
    if (width < curr) {
      return device;
    }

    return BREAKPOINT[curr];
  }, 'mobile');

  return breakpoint;
};

export default useBreakpoint;
