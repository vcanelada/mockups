import { BsDownload } from 'react-icons/bs'
import './Cta.scss';
import ebook from '../../themes/occ/images/ebook.jpeg';

export const Cta = ( {type} ) => {
  return (
    <div className="cta">
      <div className="cta__wrapper">
        <img src={ebook} alt="" />
        <button className="button">
          Descarga el Ebook Gratuito <BsDownload />
        </button>
      </div>
    </div>
  )
}
