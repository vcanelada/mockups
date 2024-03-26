import { Footer, Header, Hero, PostList, Subscription } from '..'
import { OccFooter } from '../OccFooter/OccFooter'

export const BlogCategory = () => {
  return (
    <>
      <Header />
      <Hero type='category' />
      <PostList />
      <Subscription />
      <OccFooter />
      <Footer />
    </>
  )
}
