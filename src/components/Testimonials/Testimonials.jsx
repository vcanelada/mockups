import './Testimonials.scss';

export const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials__wrapper content-wrapper content-wrapper--narrow">
        <h2 className="testimonials__title">Testimonials</h2>
        <div className="testimonials__item">
          <div className="testimonials__image">
            <img src="https://via.placeholder.com/80" alt="" />
          </div>
          <p className="testimonials__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus. Quisquam, voluptatem. Quae, voluptate. Quisquam, voluptatem. Quae, voluptate.
          </p>
          <div className="testimonials__author">
            <h3>Author Name</h3>
            <p>Author title</p>
          </div>
        </div>
      </div>
    </div>
  )
}
