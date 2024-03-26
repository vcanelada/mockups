import { LandingHero, MediaText, Featured, Testimonials, Faqs, Header, Footer } from ".."

export const LandingTofu = () => {
  return (
    <>
      <Header view="landing" />
      <LandingHero type="tofu" />
      <Footer />
    </>
  )
}

export const LandingBofu = () => {
  return (
    <>
      <LandingHero type="bofu" />
      <Featured />
      <MediaText />
      <MediaText reverse={true} />
      <Faqs />
      <Testimonials />
    </>
  )
}
