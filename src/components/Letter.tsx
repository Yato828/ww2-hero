import { letterQuote } from '../data/story';

export function Letter() {
  return (
    <section className="letter-section" id="letter" aria-labelledby="letter-title">
      <div className="container letter-layout">
        <div className="letter-aside">
          <p className="section-label"><span className="section-number">02</span> Живой голос</p>
          <h2 id="letter-title">Письмо<br /><em>фронту.</em></h2>
          <p className="letter-meta">{letterQuote.date}<br />Воинам 1-го<br />Прибалтийского фронта</p>
          <span className="letter-emblem" aria-hidden="true">ЗТ</span>
        </div>

        <div className="letter-paper">
          <span className="letter-quotation-mark" aria-hidden="true">“</span>
          <blockquote className="letter-quote" cite={letterQuote.sourceUrl}>
            <p>«{letterQuote.text} <strong>{letterQuote.emphasis}</strong>»</p>
          </blockquote>
          <div className="letter-credit">
            <p><cite>{letterQuote.attribution}</cite><span>Фрагмент открытого письма</span></p>
            <a className="text-link" href={letterQuote.sourceUrl} target="_blank" rel="noopener noreferrer">
              Читать в источнике <span aria-hidden="true">↗</span><span className="sr-only"> — в новой вкладке</span>
            </a>
          </div>
          <p className="letter-context">Она больше не могла вернуться на передовую. Но её слова дошли до тех, кто продолжал сражаться, а имя стало частью фронтовой истории.</p>
        </div>
      </div>
    </section>
  );
}
