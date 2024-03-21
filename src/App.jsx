import { createHashRouter, RouterProvider } from 'react-router-dom'

import { Header, Footer } from './components'
import { BlogIndex } from './components/templates/BlogIndex'
import { LandingTofu, LandingBofu } from './components/templates/Landing'
import { ThankYou } from './components/templates/ThankYou'
import { Email } from './components/templates/Email'

const router = createHashRouter([
  { path: '/*', element: <Header /> },
  { path: '/blog', element: <BlogIndex /> },
  { path: '/landing-tofu', element: <LandingTofu /> },
  { path: '/landing-bofu', element: <LandingBofu /> },
  { path: '/thankyou', element: <Email /> },
  { path: '/*', element: <Footer /> },
]
);
import './themes/occ/sass/occ.scss'

export const App = () => {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}
