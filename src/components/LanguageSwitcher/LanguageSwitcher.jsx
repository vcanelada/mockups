import { FaChevronDown, FaGlobe } from "react-icons/fa6"
import "./LanguageSwitcher.scss"

export const LanguageSwitcher = () => {
  return (
    <div className="language-switcher">
      <div className="language-switcher__icon">
        <FaGlobe />
      </div>
      <div className="language-switcher__label">
        <span className="language-switcher__label-current">English</span>
        <span className="language-switcher__label-chevron"><FaChevronDown size=".8em" /></span>
      </div>
    </div>
  )
}
