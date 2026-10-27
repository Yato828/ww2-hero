import { Icon } from './Icon';

const statistics = [
  { value: '128', label: 'спасённых жизней', detail: 'Каждая — целый мир' },
  { value: '8', label: 'месяцев на передовой', detail: 'Под огнём противника' },
  { value: '22', label: 'года на момент ранения', detail: 'И целая жизнь впереди' },
];

export function Hero() {
  return (
    <section className="hero" id="intro" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="section-label hero-label"><span className="label-rule" />Герой Советского Союза</p>
            <h1 className="hero-title" id="hero-title"><span>Зинаида</span><span>Туснолобова<span className="title-period">.</span></span></h1>
            <p className="hero-subtitle">Подвиг, победивший судьбу</p>
            <p className="hero-description">Она вынесла с поля боя 128 раненых. Потеряла руки и ноги. Но сохранила самое главное — способность любить, верить и жить.</p>
            <a className="button button-primary hero-button" href="#chronograph">Открыть хронограф памяти<Icon name="arrow-down" /></a>
            <p className="hero-footnote"><span aria-hidden="true">01 — 03</span>Листайте. Помните. Передавайте дальше.</p>
          </div>

          <div className="hero-visual">
            <div className="portrait-backdrop" aria-hidden="true"><span>1941</span></div>
            <p className="portrait-index"><span className="portrait-index-line" />Архивный портрет / 01</p>
            <figure className="portrait-frame">
              <img className="archive-photo hero-photo" src={`${import.meta.env.BASE_URL}images/zinaida-1941.jpg`}
                width="308" height="397" alt="Зинаида Туснолобова в светлой косынке. Архивный портрет 1941 года."
                fetchPriority="high" decoding="async" />
              <figcaption><span>Зинаида Михайловна</span><time dateTime="1941">1941 г.</time></figcaption>
            </figure>
            <p className="portrait-side-label" aria-hidden="true">Сила человеческого духа</p>
            <div className="portrait-lifetime"><span>Жизнь, ставшая примером</span><p><time dateTime="1920">1920</time><span aria-hidden="true">—</span><time dateTime="1980">1980</time></p></div>
            <a className="portrait-source" href="#source-photo">Об архивном снимке<Icon name="external" /></a>
          </div>
        </div>

        <dl className="hero-statistics">
          {statistics.map(({ value, label, detail }) => (
            <div className="hero-stat" key={label}>
              <dt><span className="stat-label">{label}</span><span className="stat-detail">{detail}</span></dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
