import './Heading.scss'

export const Heading = ( {pretitle, title, subtitle} ) => {
  return (
    <div className="heading">
      <div className="heading__wrapper content-wrapper content-wrapper--narrow">
        {
          pretitle && (
            <div className="heading__pretitle">
              {pretitle}
            </div>
          )
        }
        {
          title && (
            <div className="heading__title">
              {title}
            </div>
          )
        }
        {
          subtitle && (
            <div className="heading__subtitle">
              {subtitle}
            </div>
          )
        }
      </div>
    </div>
  )
}
