import { Routes, Route } from 'react-router-dom'

import { Header, Footer } from './components'
import { BlogIndex } from './components/templates/BlogIndex'
import { LandingTofu, LandingBofu } from './components/templates/Landing'
import { ThankYou } from './components/templates/ThankYou'
import { Email } from './components/templates/Email'

import { themes } from './themes/themes.json'
const theme = new URLSearchParams(window.location.search).get('theme');

if (theme) {
  import( themes[theme].themePath + themes[theme].styleSheet )
}

export const App = () => {

  const isEmail = window.location.pathname == '/email';

  return (
    <>
      <Routes>
        <Route path="/landing-tofu" element={ <Header location="landing" /> } />
        <Route path="/landing-bofu" element={ <Header location="landing" /> } />
        <Route path="/thankyou" element={ <Header location="landing" /> } />
        <Route path="/*" element={ <Header /> } />
      </Routes>

      <Routes>
        <Route path="/blog" element={ <BlogIndex /> } />
        <Route path="/landing-tofu" element={ <LandingTofu /> } />
        <Route path="/landing-bofu" element={ <LandingBofu /> } />
        <Route path="/thankyou" element={ <ThankYou /> } />
        <Route path="/email" element={ <Email /> } />
      </Routes>

      { !isEmail && <Footer /> }
    </>
  )
}
