import './Featured.scss'

const feats = [
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'Feature title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus. Quisquam, voluptatem. Quae, voluptate. Quisquam, voluptatem. Quae, voluptate.',
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'Feature title 2',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus. Quisquam, voluptatem. Quae, voluptate. Quisquam, voluptatem. Quae, voluptate.',
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'Feature title 3',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus. Quisquam, voluptatem. Quae, voluptate. Quisquam, voluptatem. Quae, voluptate.',
  }
];

export const Featured = () => {
  return (
    <div className="featured">
      <div className="featured__wrapper content-wrapper">
        {
          feats.map( (feat, index) => (
            <div className="featured__item" key={index}>
              <div className="featured__image">
                <img src={feat.image} alt="" />
              </div>
              <div className="featured__title">
                {feat.title}
              </div>
              <p className="featured__text">{feat.text}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
