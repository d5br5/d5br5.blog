import { useCallback, useEffect, useRef, useState } from 'react';

type ScrollDirection = 'UP' | 'DOWN';

export const useSpyElem = (elemHeight: number) => {
  // spy를 부착할 요소 ref
  const ref = useRef<HTMLDivElement>(null);
  // elem의 marginTop. 스크롤에 따라 동적으로 변함
  const [marginTop, setMarginTop] = useState(0);

  // 스크롤이 일어나기 직전의 scroll top. scroll 방향
  const prevScrollTop = useRef(0);
  const prevDirection = useRef<ScrollDirection>('DOWN');

  // 스크롤 방향전환 지점. 요소의 최하단지점이 기준
  const transitionPoint = useRef(elemHeight);

  const onScroll = useCallback(() => {
    const currScrollTop = document?.documentElement?.scrollTop || document?.body?.scrollTop || 0;
    const nextDirection = prevScrollTop.current > currScrollTop ? 'UP' : 'DOWN';

    const isUpTransition = prevDirection.current === 'DOWN' && nextDirection === 'UP';
    const isDownTransition = prevDirection.current === 'UP' && nextDirection === 'DOWN';

    const NextBottomPoint = currScrollTop + elemHeight;

    if (isUpTransition && transitionPoint.current < currScrollTop) {
      transitionPoint.current = prevScrollTop.current;
    }

    if (isDownTransition && NextBottomPoint < transitionPoint.current) {
      transitionPoint.current = prevScrollTop.current + elemHeight;
    }

    const newMargin = Math.min(0, Math.max(-elemHeight, transitionPoint.current - NextBottomPoint));
    setMarginTop(newMargin);

    // 이벤트가 마무리된 시점. 현재 값을 prev에 저장
    prevDirection.current = nextDirection;
    prevScrollTop.current = currScrollTop;
  }, [elemHeight]);

  // 중간 지점에서 새로고침시 transition point를 해당 지점으로 초기화
  useEffect(() => {
    const scrollTop = document.documentElement?.scrollTop || document.body.scrollTop;
    transitionPoint.current = scrollTop + elemHeight;
    prevScrollTop.current = scrollTop;
  }, [elemHeight]);

  // window document에 scroll 이벤트 부착, 해제
  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  return { ref, marginTop };
};
