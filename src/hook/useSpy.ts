import { useCallback, useEffect, useRef, useState } from 'react';

export const useSpy = (height: number) => {
  const ref = useRef<HTMLDivElement>(null);
  const [marginTop, setMarginTop] = useState(0);

  const prevScrollTop = useRef(0);
  const direction = useRef<'UP' | 'DOWN'>('DOWN');
  const transitionPoint = useRef(height);

  const onScroll = useCallback(() => {
    const scrollTop = document.documentElement?.scrollTop || document.body.scrollTop;
    const nextDirection = prevScrollTop.current > scrollTop ? 'UP' : 'DOWN';

    if (
      direction.current === 'DOWN' &&
      nextDirection === 'UP' &&
      transitionPoint.current - scrollTop < 0
    ) {
      transitionPoint.current = scrollTop;
    }

    if (
      direction.current === 'UP' &&
      nextDirection === 'DOWN' &&
      scrollTop - transitionPoint.current < -1 * height
    ) {
      transitionPoint.current = scrollTop + height;
    }

    const newMargin = Math.min(0, -1 * height + transitionPoint.current - scrollTop);
    setMarginTop((prev) => (direction.current === 'DOWN' && prev < -height ? prev : newMargin));

    direction.current = nextDirection;
    prevScrollTop.current = scrollTop;
  }, [height]);

  useEffect(() => {
    const scrollTop = document.documentElement?.scrollTop || document.body.scrollTop;
    transitionPoint.current = scrollTop + height;
  }, [height]);

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  return { ref, marginTop };
};
