import './Logo.scss'


// const theme = new URLSearchParams(window.location.search).get('theme');
import { themes } from '../../themes/themes.json';
import { useLocation } from 'react-router-dom';

export const Logo = () => {
  const location = useLocation()
  const theme = new URLSearchParams(location.search).get('theme');
  return (
    <div className="logo">
      <div className="logo__image">
        <img src={ themes[theme].themePath + themes[theme].components.logo.image } alt={ themes[theme].components.logo.alt } />
      </div>
      <span className="logo__alt">
        { themes[theme].components.logo.alt }
      </span>
    </div>
  )
}
