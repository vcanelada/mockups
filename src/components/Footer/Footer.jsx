import { Navigation, Related, Sharing } from '../';
import './Footer.scss';

import { themes } from '../../themes/themes.json';

const theme = new URLSearchParams(window.location.search).get('theme');
const logo = theme && `${themes[theme].themePath}${themes[theme].logo}`;

export const Footer = () => {
  return (
    <footer className="site-footer">
      {
        theme && themes[theme].footer && (
          <div className="site-footer__wrapper content-wrapper">
            <div className="site-footer__column">
              <img src={logo} alt="" className='site-footer__logo' />
              <div className="site-footer__info">
                <div dangerouslySetInnerHTML={{__html: themes[theme].footer}} />
              </div>
              <Sharing title="Síguenos en Redes Sociales" />
            </div>
            <div className="site-footer__column">
              <Related />
            </div>
          </div>
        )
      }
      <div className="colophon">
        <div className="colophon__wrapper content-wrapper">
          <div className="colophon__left">
            <p>
              {
              theme && themes[theme].colophon
                ? themes[theme].colophon
                : '© 2021 All rights reserved'
              }
            </p>
          </div>
          <div className="colophon__right">
            <Navigation view="footer" />
          </div>
        </div>
      </div>
    </footer>
  )
}
