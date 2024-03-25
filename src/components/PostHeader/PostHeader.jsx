import { Sharing } from "../Sharing/Sharing"

export const PostHeader = () => {
  return (
    <div className="post-header">
      <div className="post-header__wrapper content-wrapper">
        
        <div className="post-header__info">
          <div className="post-header__breadcrumb">
            <a href="/">← Canal Salud</a>
          </div>
          <h1 className='post-header__title'>Officia deserunt aute proident ullamco</h1>
          <div className="post-header__categories">
            <a className="post-header__category">Category 1</a>
            <a className="post-header__category">Category 2</a>
          </div>
        </div>

        <div className="post-header__image">
          <img src="//picsum.photos/800/600.webp" alt="" />
        </div>

        <div className="post-header__meta">
          <span className="post-header__date">May 1, 2021</span>
          <span className="post-header__author">By John Doe</span>

          <Sharing title=" " />
        </div>

      </div>
    </div>
  )
}
