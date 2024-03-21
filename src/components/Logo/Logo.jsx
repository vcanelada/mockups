import './Logo.scss'

import { themes } from '../../themes/themes.json';
import { useLocation } from 'react-router-dom';

import { logo } from '../../themes/occ/images/logo.svg';

export const Logo = () => {
  return (
    <div className="logo">
      <div className="logo__image">
        <img src={ logo } alt={ themes[theme].components.logo.alt } />
      </div>
      <span className="logo__alt">
        { themes[theme].components.logo.alt }
      </span>
    </div>
  )
}
