import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Letter } from './components/Letter';
import { Memorial } from './components/Memorial';
import { Sources } from './components/Sources';
import { Timeline } from './components/Timeline';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Перейти к содержанию</a>
      <Header />
      <main id="main">
        <Hero />
        <Timeline />
        <Letter />
        <Memorial />
        <Sources />
      </main>
      <Footer />
    </>
  );
}
