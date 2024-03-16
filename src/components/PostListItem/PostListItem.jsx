import { LoremIpsum } from 'react-lorem-ipsum';
import './PostListItem.scss';

export const PostListItem = () => {
  const imageId = Math.floor(Math.random() * 1000)
  const image = `//picsum.photos/400/300.webp?a=${imageId}`
  return (
    <article className="post-item">
      <a href="" className="post-item__image">
        <img src={image} alt="" />
      </a>
      <div className="post-item__content">
        <h2 className="post-item__title"><a href="">Post title</a></h2>
        <div className="post-item__excerpt">
          <LoremIpsum p={1} avgWordsPerSentence={2} />
        </div>
        <a href="#" className="post-item__link">
          Read more
        </a>
      </div>
    </article>
  )
}
