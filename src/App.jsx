import { Routes, Route, createHashRouter, RouterProvider, useLocation } from 'react-router-dom'

import { Header, Footer } from './components'
import { BlogIndex } from './components/templates/BlogIndex'
import { LandingTofu, LandingBofu } from './components/templates/Landing'
import { ThankYou } from './components/templates/ThankYou'
import { Email } from './components/templates/Email'

import { themes } from './themes/themes.json'
// const theme = new URLSearchParams(window.location.search).get('theme');

// if (theme) {
//   import( themes[theme].themePath + themes[theme].styleSheet )
// }

const router = createHashRouter([
  { path: '/*', element: <Header /> },
  { path: '/blog', element: <><Header /><BlogIndex /></> },
  { path: '/landing-tofu', element: <LandingTofu /> },
  { path: '/landing-bofu', element: <LandingBofu /> },
  { path: '/thankyou', element: <Email /> },
  { path: '/*', element: <Footer /> },
]
);
import './themes/occ/sass/occ.scss'

export const App = () => {
  // const location = useLocation()
  // const theme = "occ";
  // if (theme) {
  //   const link = document.createElement('link');
  //   link.rel = 'stylesheet';
  //   link.href = themes[theme].themePath + themes[theme].styleSheet;
  //   document.head.appendChild(link);
  // }

  return (
    <>
    <RouterProvider router={router} />
      {/* <Routes>
        <Route path="/landing-tofu" element={ <Header location="landing" /> } />
        <Route path="/landing-bofu" element={ <Header location="landing" /> } />
        <Route path="/thankyou" element={ <Header location="landing" /> } />
        <Route path="/*" element={ <Header /> } />
      </Routes>

      <Routes>
        <Route path="/mockups/blog" element={ <BlogIndex /> } />
        <Route path="/landing-tofu" element={ <LandingTofu /> } />
        <Route path="/landing-bofu" element={ <LandingBofu /> } />
        <Route path="/thankyou" element={ <ThankYou /> } />
        <Route path="/email" element={ <Email /> } />
      </Routes>

      { !isEmail && <Footer /> } */}
    </>
  )
}
