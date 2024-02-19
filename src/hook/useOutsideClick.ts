import { useEffect, useRef } from 'react';

type ClickEvent = MouseEvent;

type ClickHandler = (e: ClickEvent) => void;

export const useOutsideClick = <T extends HTMLElement>(handler: ClickHandler) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const listener = (e: ClickEvent) => {
      const target = e.target as Node;
      if (!ref.current || ref.current.contains(target)) return;
      setTimeout(() => {
        handler(e);
      }, 100);
    };

    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [handler]);
  return ref;
};
