import { useEffect, useRef } from 'react';
import { sources } from '../data/story';

export function Sources() {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    let frame = 0;
    const sourceIds = new Set(sources.map((source) => source.id as string));

    function openSource(hash: string) {
      const id = hash.slice(1);
      if (!sourceIds.has(id) || !detailsRef.current) return;
      detailsRef.current.open = true;
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ block: 'center' });
      });
    }

    function handleHashChange() {
      openSource(window.location.hash);
    }

    function handleDocumentClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest<HTMLAnchorElement>('a[href^="#source-"]');
      if (anchor) openSource(anchor.hash);
    }

    // Раскрываем details перед штатным якорным переходом, в том числе из URL.
    document.addEventListener('click', handleDocumentClick);
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => {
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('hashchange', handleHashChange);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <aside className="sources container" aria-label="Источники и архивные материалы">
      <details id="sources" ref={detailsRef}>
        <summary>
          <span className="sources-summary-label">Источники и архивные материалы <span>{String(sources.length).padStart(2, '0')}</span></span>
          <span className="sources-summary-icon" aria-hidden="true">+</span>
        </summary>
        <ol className="sources-list">
          {sources.map((source, index) => (
            <li className="source-item" id={source.id} key={source.id}>
              <span className="source-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <a href={source.url} target="_blank" rel="noopener noreferrer">{source.title} <span aria-hidden="true">↗</span><span className="sr-only"> — в новой вкладке</span></a>
                <p>{source.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </details>
    </aside>
  );
}
