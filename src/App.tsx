import Banner from './components/banner';
import NavbarItem from './components/navbarItem';
import Outsourcing from './components/Outsourcing';
import { Prices } from './components/Prices';
import SectionServices from './components/sectionServices';
import plans from '../configs/pricesInfo';
import { FooterComponent } from './components/Footer';

function App() {
  return (
    <>
    <NavbarItem />
    <div className='flex flex-col items-center'>
      <Banner />
      <div className="flex w-full items-center justify-center">
        <SectionServices />
      </div>
      <Outsourcing/>
      <div className="flex flex-wrap gap-5 p-5 justify-center">
      {plans.map((plan, index) => (
        <Prices key={index} {...plan} />
      ))}
    </div>
    </div>
    <FooterComponent/>
    </>
  );
}

export default App;
