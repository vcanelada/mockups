import { LandingHero, MediaText, Featured, Testimonials, Faqs } from ".."

export const LandingTofu = () => {
  return (
    <>
      <LandingHero type="tofu" />
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
