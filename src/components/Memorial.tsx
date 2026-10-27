import { fullName } from '../data/story';

export function Memorial() {
  return (
    <section className="memorial" id="memory" aria-labelledby="memorial-title">
      <div className="container">
        <p className="section-label"><span className="section-number">03</span> Сохранить память</p>
        <h2 id="memorial-title">Почтите память<br /><em>героя.</em></h2>
        <p className="memorial-intro">За каждой спасённой жизнью — чья-то семья и чьё-то будущее. Этот огонёк — знак благодарности Зинаиде Михайловне.</p>

        <div className="memorial-stage">
          <div className="candle" role="img" aria-label="Вечно горящая свеча памяти">
            <span className="candle-glow" aria-hidden="true" />
            <span className="candle-flame" aria-hidden="true" />
            <span className="candle-wick" aria-hidden="true" />
            <span className="candle-wax" aria-hidden="true" />
            <span className="candle-base" aria-hidden="true" />
          </div>
        </div>

        <p className="memorial-inscription">В память о героическом подвиге</p>
        <p className="memorial-note">Её мужество и любовь к жизни навсегда останутся с нами.</p>
        <div className="memorial-dedication"><span aria-hidden="true">✦</span><p>{fullName}<span>1920 — 1980</span></p></div>
      </div>
    </section>
  );
}
