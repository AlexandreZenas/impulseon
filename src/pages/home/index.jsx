import './index.css';
import Banner from './banner';
import { Navbar } from '../../components/navbar';
import { Services } from './services';
import { Statistics } from './statistics';
import { Models } from './models';
import { CallToAction } from './call-to-action';
import { Steps } from './steps';
import { About } from './about';
import { OurExperience } from './our-experience';
import { Footer } from '../../components/footer';
function Home() {

  return (
    <main>  
      <Navbar></Navbar>
      <Banner></Banner>
      <Services></Services>
      <Statistics></Statistics>
      <CallToAction></CallToAction>
      <Models></Models>
      <Steps></Steps>
      <OurExperience></OurExperience>
      <About></About>
      <Footer></Footer>
    </main>
  )
}

export default Home ;
