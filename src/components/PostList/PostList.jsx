import { Pagination } from "../Pagination/Pagination"
import { PostListItem } from "../PostListItem/PostListItem"

import './Postlist.scss'

export const PostList = () => {
  return (
    <section className="post-list">
      <div className="post-list__wrapper content-wrapper">
        {
          [...Array(14)].map((_, index) => (
              index === 2 || index === 6
              ? <div className={index === 6 ? 'cta cta--landscape' : 'cta'} key={index}></div>
              : <PostListItem key={index} />
          ))
        }
      </div>
      <div className="post-list__pagination">
        <Pagination />
      </div>
    </section>
  )
}

