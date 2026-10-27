import { Icon, StarMark } from './Icon';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <a className="footer-brand" href="#intro"><StarMark /><span>Женское лицо Победы</span></a>
        <p>Память живёт,<br /><em>пока мы рассказываем.</em></p>
        <a className="back-top" href="#intro" aria-label="Вернуться к началу страницы"><Icon name="arrow-up" /></a>
      </div>
      <div className="container footer-bottom">
        <p>Проект разработан для республиканского конкурса компьютерных разработок патриотической направленности <strong>«ПАТРИОТ.BY»</strong>.</p>
        <span>Зинаида Туснолобова-Марченко · 1920–1980</span>
      </div>
    </footer>
  );
}
