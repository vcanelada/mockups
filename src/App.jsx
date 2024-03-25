import { createHashRouter, RouterProvider } from 'react-router-dom'

import { Header, Footer } from './components'
import { BlogIndex } from './components/templates/BlogIndex'
import { LandingTofu, LandingBofu } from './components/templates/Landing'
import { ThankYou } from './components/templates/ThankYou'
import { Email } from './components/templates/Email'

import './themes/occ/sass/occ.scss'
import { BlogPost } from './components/templates/BlogPost'

const router = createHashRouter([
  { path: '/*', element: <Header /> },
  { path: '/blog', element: <BlogIndex /> },
  { path: '/blog/post', element: <BlogPost />},
  { path: '/landing-tofu', element: <LandingTofu /> },
  { path: '/landing-bofu', element: <LandingBofu /> },
  { path: '/thankyou', element: <Email /> },
  { path: '/*', element: <Footer /> },
]
);

export const App = () => {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}
