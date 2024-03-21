import './Hero.scss'

// const theme = new URLSearchParams(window.location.search).get('theme');

import { themes } from '../../themes/themes.json';
import { Button } from '../Button/Button';
import { useLocation } from 'react-router-dom';

import heroBg from '../../themes/occ/images/hero-bg.png';


export const Hero = () => {
  const location = useLocation()
  const theme = new URLSearchParams(location.search).get('theme');
  return (
    <section className="hero">
      <div className="hero__wrapper content-wrapper">
        <div className="hero__heading">
          <h1>{ themes[theme] ? themes[theme].components.hero.title : "Título del Blog" }</h1>
          <p>{ themes[theme] ? themes[theme].components.hero.subtitle : "Nulla excepteur anim laborum mollit fugiat amet exercitation proident." }</p>
          { themes[theme] && themes[theme].components.hero.cta ? <Button text={themes[theme].components.hero.cta} /> : "" }
        </div>
        <img className="hero__background" src={ heroBg } alt="" />
      </div>
    </section>
  )
}
