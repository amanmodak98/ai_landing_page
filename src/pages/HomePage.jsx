import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Benifits from '../Components/Benifits'
import Collabration from '../Components/Collabration'
import Services from '../Components/Services'
import ButtonGradient from '../assets/svg/ButtonGradient'

export default function HomePage() {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <main role="main">
          <Hero />
          <Benifits />
          <Collabration />
          <Services />
        </main>
      </div>
      <ButtonGradient />
    </>
  )
}
