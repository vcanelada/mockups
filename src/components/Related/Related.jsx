import './Related.scss'

const items = [
  {
    "image": "https://via.placeholder.com/600x800",
    "title": "First item title",
    "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    "image": "https://via.placeholder.com/600x800",
    "title": "Second item title",
    "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    "image": "https://via.placeholder.com/600x800",
    "title": "Third item title",
    "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    "image": "https://via.placeholder.com/600x800",
    "title": "Fourth item title",
    "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }
];

export const Related = ( {mode = undefined} ) => {
  return (
    <div className={ mode ? "related related--column-view" : "related"  }>
      <div className="related__wrapper content-wrapper">
        {
          items.map( (item, index) => (
            <div key={index} className="related__item">
              <div className="related__item-image">
                <img src={item.image} alt="" />
              </div>
              <div className="related__item-info">
                <div className="related__item-title">
                  <a href=''>{item.title}</a>
                </div>
                <div className="related__item-text">
                  {item.text}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
