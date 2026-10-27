import { useEffect, useRef, useState } from 'react';
import { useReadingProgress } from '../hooks/useReadingProgress';
import { Icon, StarMark } from './Icon';

const navigation = [
  { id: 'chronograph', label: 'Хронограф', number: '01' },
  { id: 'letter', label: 'Письмо фронту', number: '02' },
  { id: 'memory', label: 'Свеча памяти', number: '03' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const menuButton = useRef<HTMLButtonElement>(null);
  const progressRef = useReadingProgress();

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 701px)');
    const closeOnDesktop = () => {
      if (desktop.matches) setIsOpen(false);
    };
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      }
    }, { rootMargin: '-15% 0px -55% 0px' });
    ['intro', ...navigation.map(({ id }) => id)].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#intro" onClick={() => setIsOpen(false)} aria-label="Женское лицо Победы — в начало">
          <StarMark />
          <span className="brand-name">Женское лицо<span>Победы</span></span>
        </a>
        <p className="header-caption">Цифровой мемориал<span>История мужества и любви</span></p>
        <button className="menu-toggle" type="button" ref={menuButton}
          aria-expanded={isOpen} aria-controls="main-navigation"
          aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'} onClick={() => setIsOpen(!isOpen)}>
          <Icon name={isOpen ? 'close' : 'menu'} />
        </button>
        <nav id="main-navigation" className={`main-nav${isOpen ? ' is-open' : ''}`} aria-label="Основная навигация">
          {navigation.map(({ id, label, number }) => (
            <a key={id} href={`#${id}`} onClick={() => setIsOpen(false)} aria-current={activeSection === id ? 'location' : undefined}>
              <span className="nav-number" aria-hidden="true">{number}</span>{label}
            </a>
          ))}
        </nav>
      </div>
      <div className="reading-progress" ref={progressRef} aria-hidden="true" />
    </header>
  );
}
