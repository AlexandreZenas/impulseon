import './index.css';
import { ServiceCard } from '../../../components/service-card';
import { ColorfulBubble } from '../../../components/colorfulBubble';
import { serviceDados } from '../../../mocks/service-card';


export function  Services() {
  return (
    <section id={`Services`}>
        <ColorfulBubble></ColorfulBubble>
        <div className='container-1140px container-services'>
          {serviceDados.map((item, index) => <ServiceCard title={item.title} text={item.text} link={item.link} index={item.index} key={index}></ServiceCard>)}
        </div>
    </section>
  )

}