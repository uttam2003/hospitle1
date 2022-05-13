// import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Slider from './Slider.js';
import Cards from './Cards.js';
import Aboutus from './Aboutus.js';
import Footer from './Footer.js';
import { BackTop } from 'antd';
import 'antd/dist/antd.css';
import { BsChevronUp } from "react-icons/bs";

const style = {
  height: 50,
  width: 50,
  lineHeight: '40px',
  borderRadius: '50%',
  backgroundColor: 'pink',
  color: 'black',
  textAlign: 'center',
  fontSize: 16,
};

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Cards />
      <Aboutus />
      <Footer />
      <BackTop className='btp'>
        <div style={style}><BsChevronUp></BsChevronUp></div>
      </BackTop>
    </div>
  );
}

export default App;