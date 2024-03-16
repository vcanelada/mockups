import './MediaText.scss'

export const MediaText = ( {reverse} ) => {
  return (
    <div className={
      reverse
      ? "media-text media-text--reverse"
      : "media-text"
    }>
      
      <div className="media-text__wrapper content-wrapper">
        <div className="media-text__media">
          <img src="https://via.placeholder.com/600x400" alt="" />
        </div>
        <div className="media-text__text">
          <h2>Section title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus. Quisquam, voluptatem. Quae, voluptate. Quisquam, voluptatem. Quae, voluptate.
          </p>
          <ul>
            <li>Lorem ipsum sit amet elit.</li>
            <li>Lorem ipsum dolor sit adipisicing elit.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
