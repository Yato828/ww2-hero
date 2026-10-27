import { useEffect, useRef, type RefObject } from 'react';

/** Enhance a section without hiding its content when animation APIs are absent. */
export function useReveal<T extends HTMLElement>(): RefObject<T | null> {
  const rootRef = useRef<T>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const elements = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (root.matches('[data-reveal]')) elements.unshift(root);
    const preference = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    let observer: IntersectionObserver | undefined;
    let active = true;

    const reveal = (element: HTMLElement) => {
      element.classList.add('is-revealed');
      observer?.unobserve(element);
    };

    const revealAll = () => {
      observer?.disconnect();
      elements.forEach(reveal);
    };

    const revealContaining = (target: Element | null) => {
      if (!target) return;
      elements.forEach((element) => {
        if (element === target || element.contains(target)) reveal(element);
      });
    };

    const revealHashTarget = () => {
      try {
        const id = decodeURIComponent(window.location.hash.slice(1));
        if (id) revealContaining(document.getElementById(id));
      } catch {
        // A malformed external fragment must not prevent the page from rendering.
      }
    };

    const onFocus = (event: FocusEvent) => {
      if (event.target instanceof Element) revealContaining(event.target);
    };

    const onPreferenceChange = (event: MediaQueryListEvent) => {
      if (event.matches) revealAll();
    };

    if (!('IntersectionObserver' in window) || preference?.matches) {
      revealAll();
    } else {
      try {
        observer = new IntersectionObserver((entries) => {
          if (!active) return;
          entries.forEach((entry) => {
            if (entry.isIntersecting) reveal(entry.target as HTMLElement);
          });
        }, { threshold: 0, rootMargin: '0px 0px -36px 0px' });

        // Measure before adding transform classes so one item cannot affect another.
        const positions = elements.map((element) => ({
          element,
          top: element.getBoundingClientRect().top,
        }));
        positions.forEach(({ element, top }) => {
          if (top <= window.innerHeight) {
            reveal(element);
          } else {
            element.classList.add('reveal-ready');
            observer!.observe(element);
          }
        });
      } catch {
        revealAll();
      }
    }

    revealHashTarget();
    root.addEventListener('focusin', onFocus);
    window.addEventListener('hashchange', revealHashTarget);
    preference?.addEventListener('change', onPreferenceChange);

    return () => {
      active = false;
      observer?.disconnect();
      root.removeEventListener('focusin', onFocus);
      window.removeEventListener('hashchange', revealHashTarget);
      preference?.removeEventListener('change', onPreferenceChange);
      // StrictMode intentionally mounts effects twice during development.
      elements.forEach((element) => element.classList.remove('reveal-ready', 'is-revealed'));
    };
  }, []);

  return rootRef;
}
