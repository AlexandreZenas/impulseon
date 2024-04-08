import './index.css';
import Banner from './banner';
import { Navbar } from '../../components/navbar';
import { Services } from './services';
import { Statistics } from './statistics';
import { Models } from './models';
function Home() {

  return (
    <main>  
      <Navbar></Navbar>
      <Banner></Banner> 
      <Services></Services>
      <Statistics></Statistics>
      <Models></Models>
    </main>
  )
}

export default Home ;
