import { useEffect, useRef, useState } from 'react';

export const useHeadingsObserver = (query: string) => {
  const observer = useRef<IntersectionObserver>();
  const [activeIdList, setActiveIdList] = useState<string[]>([]);

  useEffect(() => {
    // const scrollMarginOption = { rootMargin: '-80px 0px -80px 0px' };

    const handleObserver: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const targetId = `#${entry.target.id}`;
        if (entry.isIntersecting) {
          setActiveIdList((prev) => [...prev, targetId]);
        } else {
          setActiveIdList((prev) => prev.filter((elem) => elem !== targetId));
        }
      });
    };

    observer.current = new IntersectionObserver(handleObserver);

    const elements = document.querySelectorAll(query);
    elements.forEach((elem) => observer.current?.observe(elem));

    return () => observer.current?.disconnect();
  }, [query]);

  return activeIdList;
};
