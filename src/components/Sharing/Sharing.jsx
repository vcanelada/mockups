import './Sharing.scss'

import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';

const socialNetworks = [
  {
    name: 'facebook',
    url: 'https://www.facebook.com/sharer/sharer.php?u=https://www.google.com',
    icon: <FaFacebookF size={'1rem'} />
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/intent/tweet?text=Hello%20world',
    icon: <FaXTwitter size={'1.5rem'} />
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/shareArticle?mini=true&url=https://www.google.com&title=Hello%20world&summary=Hello%20world&source=LinkedIn',
    icon: <FaLinkedinIn size={'1.5rem'} />
  },
  {
    name: 'whatsapp',
    url: 'https://api.whatsapp.com/send?text=Hello%20world',
    icon: <FaWhatsapp size={'1.8rem'} />
  }
];

export const Sharing = ( {title} ) => {
  return (
    <div className="sharing">
      <div className="sharing__wrapper">
        <div className="sharing__title">
          { title ? title : 'Share with your contacts' }
        </div>
        <div className="sharing__items">
          {
            socialNetworks.map( (network, index) => (
              <a key={index} href={network.url} target="_blank" rel="noreferrer" className="sharing__item">
                {network.icon}
              </a>
            ))
          }
        </div>
      </div>
    </div>
  )
}
