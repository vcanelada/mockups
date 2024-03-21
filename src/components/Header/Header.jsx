import {Navigation, Searchbar, LanguageSwitcher, Logo} from '..';

import { FaBars, FaArrowLeft } from "react-icons/fa6";

// const theme = new URLSearchParams(window.location.search).get('theme');
import { themes } from '../../themes/themes.json';

import './Header.scss';
import { useLocation } from 'react-router-dom';

export const Header = ( { view } ) => {
  const location = useLocation()
  const theme = new URLSearchParams(location.search).get('theme');
  return (
  <header className="header">
    <div className={ "header__wrapper content-wrapper" + (theme && themes[theme].components.header.width == "full" ? " content-wrapper--full" : "") }>
      <div className="header__logo">
        <Logo />
      </div>
        {
          view !== 'landing' && (
            <>
            <div className="header__toggle"><FaBars /></div>
            <div className="header__column">
              { theme && themes[theme].components.header.searchbar && <Searchbar /> }
              <Navigation view="header" />
              { theme && themes[theme].languages.length > 1 && <LanguageSwitcher /> }
            </div>
            </>
          )
        }
    </div>
  </header>
)};