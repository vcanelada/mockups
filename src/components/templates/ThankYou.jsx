import { Footer, Header, Heading, LandingHero, Related, ResourceDownload } from ".."

export const ThankYou = () => {
  return (
    <>
      <Header />
      <ResourceDownload />
      {/* <Heading title="Y ahora, ¿qué?" /> */}
      <LandingHero type="tofu" social="hide" />
      <Related />
      <Footer />
    </>
  )
}
