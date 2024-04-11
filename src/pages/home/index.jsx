import './index.css';
import Banner from './banner';
import { Navbar } from '../../components/navbar';
import { Services } from './services';
import { Statistics } from './statistics';
import { Models } from './models';
import { CallToAction } from './call-to-action';
import { Steps } from './steps';
import { About } from './about';
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
      <About></About>
    </main>
  )
}

export default Home ;
