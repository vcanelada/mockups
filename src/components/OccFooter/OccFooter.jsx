import { Sharing } from "../Sharing/Sharing"
import { columns } from "./footerMenu.json";
import "./OccFooter.scss";

export const OccFooter = () => {
  return (
    <div className="occ-footer">
      <div className="occ-footer__wrapper content-wrapper">
        <div className="occ-footer__social">
          <Sharing title="Síguenos en redes sociales" />
        </div>
        <div className="occ-footer__cols">
          {
            columns.map((column, index) => (
              <div key={index} className="occ-footer__col">
                <h3 className="occ-footer__col-title"> { column.title } </h3>
                <ul className="occ-footer__col-list">
                  {
                    // column.links is Array
                    column.links.map((link, index) => (
                      <li key={index}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer"> { link } </a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
