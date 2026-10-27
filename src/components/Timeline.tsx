import { timelineEvents, sources } from '../data/story';
import { useReveal } from '../hooks/useReveal';

export function Timeline() {
  const revealRef = useReveal<HTMLElement>();

  return (
    <section className="chronograph" id="chronograph" aria-labelledby="chronograph-title" ref={revealRef}>
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="section-label"><span className="section-number">01</span> Хронограф памяти</p>
            <h2 id="chronograph-title">Сильнее войны.<br /><em>Сильнее судьбы.</em></h2>
          </div>
          <p className="section-intro">Пять глав одной жизни. Решение помогать, мужество на передовой и долгий путь обратно к счастью.</p>
        </div>

        <ol className="timeline">
          {timelineEvents.map((event, index) => {
            const source = sources.find((item) => item.id === event.sourceId);

            return (
              <li className="timeline-event" key={event.id} data-reveal>
                <div className="timeline-date">
                  {event.dateTime ? <time dateTime={event.dateTime}>{event.year}</time> : <span>{event.year}</span>}
                  <span className="timeline-chapter">{String(index + 1).padStart(2, '0')} / {event.chapter}</span>
                </div>
                <article className="timeline-content" aria-labelledby={event.id}>
                  <h3 id={event.id}>{event.title}</h3>
                  <p className="timeline-description">{event.description}</p>
                  <details className="timeline-details">
                    <summary><span>{event.detailTitle}</span><span className="timeline-details-icon" aria-hidden="true">+</span></summary>
                    <div className="timeline-detail-body">
                      <p>{event.detail}</p>
                      <a className="source-ref" href={`#${event.sourceId}`} aria-label={`Источник: ${source?.title ?? 'исторические материалы'}`}>
                        Источник <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </details>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
