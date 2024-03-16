import './Faqs.scss';

export const Faqs = () => {
  return (
    <div className="faqs">
      <div className="faqs__wrapper content-wrapper content-wrapper--narrow">
        <h2 className="faqs__title">FAQs</h2>
        <div className="faqs__items">
          <div className="faqs__item">
            <h3 className="faqs__question">
              First question goes here?
            </h3>
            <p className="faqs__answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus. Quisquam, voluptatem. Quae, voluptate. Quisquam, voluptatem. Quae, voluptate.
            </p>
          </div>
          <div className="faqs__item">
            <h3 className="faqs__question">
              Here goes the second question?
            </h3>
            <p className="faqs__answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus. Quisquam, voluptatem. Quae, voluptate. Quisquam, voluptatem. Quae, voluptate.
            </p>
          </div>
          <div className="faqs__item">
            <h3 className="faqs__question">
              And the third one goes here?
            </h3>
            <p className="faqs__answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus. Quisquam, voluptatem. Quae, voluptate. Quisquam, voluptatem. Quae, voluptate.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
