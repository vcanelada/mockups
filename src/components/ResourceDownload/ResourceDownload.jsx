import './ResourceDownload.scss';

import {themes} from '../../themes/themes.json';
import { Sharing } from '../Sharing/Sharing';
const theme = new URLSearchParams(window.location.search).get('theme');

export const ResourceDownload = () => {
  return (
    <div className="resource-download">
      <div className="resource-download__wrapper content-wrapper content-wrapper--narrow">
        <div className="resource-download__image">
          {
            theme && themes[theme].landing.ebook 
            ? <img src={ themes[theme].themePath + themes[theme].landing.ebook } alt="" />
            : <img src="https://via.placeholder.com/600x400" alt="" />
          }
        </div>
        <div className="resource-download__title">
          { theme && themes[theme].thankyou.title ? themes[theme].thankyou.title : "Thank you!" }
        </div>
        <div className="resource-download__text">
          { theme && themes[theme].thankyou.text ? themes[theme].thankyou.text : "Lorem ipsum dolor sit amet consectetur adipisicing elit." }
        </div>
        <div className="resource-download__footer">
          <Sharing />
        </div>
      </div>
    </div>
  )
}
