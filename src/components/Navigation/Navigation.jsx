import './Navigation.scss';

import {themes} from '../../themes/themes.json';
// const theme = new URLSearchParams(window.location.search).get('theme');

import { FaXmark } from "react-icons/fa6";
import { Related } from '..';
import { useLocation } from 'react-router-dom';

const handleClick = (e) => {
  e.preventDefault();
  const navSidebar = document.querySelector('.nav-sidebar');
  navSidebar.classList.toggle('nav-sidebar--open');
}

export const Navigation = ( { view } ) => {
  const location = useLocation()
  const theme = new URLSearchParams(location.search).get('theme');

  const items = ( themes[theme].menu[view] )
  ? themes[theme].menu
  : {
    header: ['Home', 'Categories', 'Resources Center', 'Contact'],
    footer: ['Privacy Policy', 'Terms & Conditions'],
    custom: ['Todas las categorías ▾', 'Recursos ▾']
  }
  return (
    <div className="nav">
      <ul>
        {
          items[view].map((item, index) => (
            <li key={index}>
              {
              index === items[view].length - 1 ? <a href="#" onClick={handleClick}>{item}</a> : <a href="#">{item}</a>
              }
            </li>
          ))
        }
      </ul>
      <div className="nav-sidebar">
        <div className="nav-sidebar__title">
          <span>Recursos y Utilidades</span>
          <button onClick={handleClick}><FaXmark /></button>
        </div>
        <Related mode="column" />
      </div>
    </div>
  )
}
