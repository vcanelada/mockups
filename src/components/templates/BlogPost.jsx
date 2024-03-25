import { Footer, Header, Hero, PostList, Related, Sharing, Subscription } from '..'
import { OccFooter } from '../OccFooter/OccFooter'
import { PostContent } from '../PostContent/PostContent';
import { PostContentIndex } from '../PostContentIndex/PostContentIndex';
import { PostHeader } from '../PostHeader/PostHeader';

import './BlogPost.scss';

export const BlogPost = () => {
  return (
    <>
      <Header />
      
      <div className="post">
        <div className="post__wrapper content-wrapper">
          <div className="post__header">
            <PostHeader />
          </div>
          <div className="post__main">
            <PostContent />
          </div>
          <div className="post__sidebar">
            <PostContentIndex />
          </div>
        </div>
      </div>

      <div className="related-posts">
        <div className="related-posts__wrapper content-wrapper">
          <h2 className='related-posts__title'>Artículos relacionados</h2>
          <Related resources='posts' />
        </div>
      </div>

      <Subscription />
      <OccFooter />
      <Footer />
    </>
  )
}
