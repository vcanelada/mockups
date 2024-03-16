import './Hero.scss'

const theme = new URLSearchParams(window.location.search).get('theme');
import { themes } from '../../themes/themes.json';
import { Button } from '../Button/Button';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__wrapper content-wrapper">
        <h1>{ themes[theme] ? themes[theme].components.hero.title : "Título del Blog" }</h1>
        <p>{ themes[theme] ? themes[theme].components.hero.subtitle : "Nulla excepteur anim laborum mollit fugiat amet exercitation proident." }</p>
        { themes[theme] && themes[theme].components.hero.cta ? <Button text={themes[theme].components.hero.cta} /> : "" }
      </div>
    </section>
  )
}
