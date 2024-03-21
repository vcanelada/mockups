import { Cta } from "../Cta/cta"
import { Pagination } from "../Pagination/Pagination"
import { PostListItem } from "../PostListItem/PostListItem"

import './Postlist.scss'

export const PostList = () => {
  return (
    <section className="post-list">
      <div className="post-list__wrapper content-wrapper">
        {
          [...Array(15)].map((_, index) => (
              index === 2 || index === 6 || index === 13
              ? <Cta key={index} type={index === 6 ? 'landscape' : 'single'} />
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

