import {Form} from '..'
import './LandingHero.scss';

import {themes} from '../../themes/themes.json';
const theme = new URLSearchParams(window.location.search).get('theme');


const formFields = [
  { name: 'name', label: 'Name', type: 'text' },
  { name: 'lastname', label: 'Last Name', type: 'text' },
  { name: 'email', label: 'Correo electrónico', type: 'email' },
  { name: 'options', label: 'Options', type: 'checkbox', options: ['Spain', 'Chile', 'Brazil', 'France'] }
];

export const LandingHero = ( {type} ) => {
  return (
    <>
      <div className="landing-hero">
        <div className="landing-hero__wrapper content-wrapper">
          <div className="landing-hero__text">
            <div className="landing-hero__ebook">
              {
                theme && themes[theme].landing.ebook 
                ? <img src={ themes[theme].themePath + themes[theme].landing.ebook } alt="" />
                : <img src="https://via.placeholder.com/600x400" alt="" />
              }
            </div>
            <div className="landing-hero__description">
              <h2>Describe el contenido de lo que ofreces</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima harum, sed est ipsa eaque praesentium. Explicabo nulla est, accusantium, voluptatem officia maxime facere saepe velit ipsum distinctio sit quae debitis?</p>
              <h3>En este material encontrarás...</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima harum, sed est ipsa eaque praesentium. Explicabo nulla est, accusantium, voluptatem officia maxime facere saepe velit ipsum distinctio sit quae debitis?</p>
              {
                type === 'tofu' && (
                  <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                  </ul>
                )
              }
            </div>
          </div>
          <div className="landing-hero__form">
            <div className="landing-hero__form-pretitle">
              { theme && themes[theme].landing.preTitle ? themes[theme].landing.preTitle : "Free Ebook" }
            </div>
            <div className="landing-hero__form-title">
              { theme && themes[theme].landing.title ? themes[theme].landing.title : "Descarga el Ebook sobre la temática de esta landing" }
            </div>
            <div className="landing-hero__form-subtitle">
              { theme && themes[theme].landing.subtitle ? themes[theme].landing.subtitle : "Rellena el siguiente formulario para descargar el Ebook:" }
            </div>
            <Form location="landing" fields={formFields} />
          </div>
        </div>
      </div>
    </>
  )
}
