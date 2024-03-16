import './Email.scss';

const theme = new URLSearchParams(window.location.search).get('theme');
import { themes } from '../../themes/themes.json';
import { Logo, Sharing } from '..';



export const Email = () => {
  return (
    <div className="email">
      <div className="email__wrapper content-wrapper content-wrapper--narrow">
        <div className="email__header">
          {
            theme && themes[theme].logo
            ? <img src={ themes[theme].themePath + themes[theme].logo } alt="" />
            : <Logo />
          }
        </div>
        <div className="email__body">
          <p>
            Hello,
          </p>
          <p>
            Thank you for your interest in our content. You can find the requested content in the attachment. If you have any questions, please feel free to contact us.
          </p>
          <p>
            We are looking forward to hearing from you. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt perspiciatis eum dicta reiciendis unde rem magni omnis a natus, consectetur libero aliquid vitae necessitatibus, aperiam sit, nisi ad deserunt error!
          </p>
          <h2>
            It may be interesting for you:
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quod laudantium in deserunt blanditiis a reiciendis id assumenda iure asperiores laboriosam nulla, illum placeat, neque cum ut reprehenderit, exercitationem odit!
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing voluptatibus.</li>
            <li>Lorem dolor sit amet elit. Quisquam, voluptatibus.</li>
            <li>Lorem ipsum dolor  amet consectetur adipisicing elit. Quisquam, voluptatibus.</li>
            <li>Lorem consectetur adipisicing elit. Quisquam, voluptatibus.</li>
          </ul>
          <div className="email__signature">
            <div className="email__signature-image">
              <img src="https://via.placeholder.com/80" alt="" />
            </div>
            <div className="email__signature-text">
              <strong>
                John Doe
              </strong>
              <span>
                CEO
              </span>
            </div>
          </div>
          <div className="email__cta">
            <img src="https://via.placeholder.com/800x320" alt="" />
          </div>
        </div>
        <div className="email__footer">
          <Sharing />
        </div>
      </div>
      <div className="email__colophon">
      <p>Esta comunicación ha sido enviada por [RAZON SOCIAL] a destinatarios con los que mantiene una relación contractual previa o que han solicitado o autorizado expresamente su envío.</p>
      <p>Si no desea recibir más comunicaciones de este tipo puede indicarlo enviando un correo electrónico a la dirección [CORREO ELECTRÓNICO] o haciendo click aquí (INCLUIR ENLACE). Puede modificar sus preferencias de suscripción desde esta página (INCLUIR ENLACE).</p>
      </div>
    </div>
  )
}
