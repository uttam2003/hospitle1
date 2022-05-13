import 'bootstrap/dist/css/bootstrap.min.css';
import { } from 'react-bootstrap';
import './Aboutus.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Aboutus() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  var settings1 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='main1'>
      <div className='container'>
        <div className='row m2'>
          <Slider {...settings1}>
            {/* <div>
              <div className='text-center1'>
                <img src={require('./image/s1.jpg')} className='hov'></img>
              </div>
            </div> */}
            <div class="text-center1">
              <img src={require('./image/s1.jpg')} className='hov'></img>
              <div class="fullcap">
                Pigmentation with Q-switch
              </div>
            </div>

            <div>
              <div className='text-center1'>
                <img src={require('./image/s2.jpg')} className='hov'></img>
                <div class="fullcap">
                  Nail Surgery
                </div>
              </div>
            </div>
            <div>
              <div className='text-center1'>
                <img src={require('./image/s3.jpg')} className='hov'></img>
                <div class="fullcap">
                  Keloid Treatment
                </div>
              </div>
            </div>
            <div>
              <div className='text-center1'>
                <img src={require('./image/s4.jpg')} className='hov'></img>
                <div class="fullcap">
                  Microblading
                </div>
              </div>
            </div>
            <div>
              <div className='text-center1'>
                <img src={require('./image/s5.jpg')} className='hov'></img>
                <div class="fullcap">
                  Vaser Liposuction
                </div>
              </div>
            </div>
            <div>
              <div className='text-center1'>
                <img src={require('./image/s6.jpg')} className='hov'></img>
                <div class="fullcap">
                  Skin Tightening
                </div>
              </div>
            </div>
            <div>
              <div className='text-center1'>
                <img src={require('./image/s7.jpg')} className='hov'></img>
                <div class="fullcap">
                  Laser for Birthmarks
                </div>
              </div>
            </div>
            <div>
              <div className='text-center1'>
                <img src={require('./image/s8.jpg')} className='hov'></img>
                <div class="fullcap">
                  hair loss
                </div>
              </div>
            </div>
            <div>
              <div className='text-center1'>
                <img src={require('./image/s9.jpg')} className='hov'></img>
                <div class="fullcap">
                  Tattoo Removal
                </div>
              </div>
            </div>
            <div>
              <div className='text-center1'>
                <img src={require('./image/s10.jpg')} className='hov'></img>
                <div class="fullcap">
                Botox Fillers
                </div>
              </div>
            </div>
            <div>
              <div className='text-center1'>
                <img src={require('./image/s11.jpg')} className='hov'></img>
                <div class="fullcap">
                Threadlift
                </div>
              </div>
            </div>
            <div>
              <div className='text-center1'>
                <img src={require('./image/s12.jpg')} className='hov'></img>
                <div class="fullcap">
                Chemical Peeling
                </div>
              </div>
            </div>
            <div>
              <div className='text-center1'>
                <img src={require('./image/s13.jpg')} className='hov'></img>
                <div class="fullcap">
                Medi Facial
                </div>
              </div>
            </div>
            <div>
              <div className='text-center1'>
                <img src={require('./image/s14.jpg')} className='hov'></img>
                <div class="fullcap">
                Glow Treatment
                </div>
              </div>
            </div>
            <div>
              <div className='text-center1'>
                <img src={require('./image/s16.jpg')} className='hov hov1'></img>
                <div class="fullcap">
                hair Transplant
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <div className='main2'>
        <div className='container'>
          <div className='row m2'>
            <h1 className='dark'>WHY SAKHIYA SKIN CLINIC?</h1>
            <div className='col-sm  f1'>
              <div className='text-center'>
                <img src={require('./image/01.png')} className='im'></img>
                <p className='gy'>US-FDA Approved Equipment</p>
              </div>
            </div>
            <div className='col-sm '>
              <div className='text-center'>
                <img src={require('./image/02.png')} className='im'></img>
                <p className='gy'>Expert Dermatologist</p>
              </div>
            </div>
            <div className='col-sm '>
              <div className='text-center'>
                <img src={require('./image/03.png')} className='im'></img>
                <p className='gy'>State of the art Technology</p>
              </div>
            </div>
            <div className='col-sm '>
              <div className='text-center'>
                <img src={require('./image/04.png')} className='im'></img>
                <p className='gy'>5 Lakh+ Satisfied Patient</p>
              </div>
            </div>
            <div className='col-sm '>
              <div className='text-center'>
                <img src={require('./image/05.png')} className='im'></img>
                <p className='gy'>5 Lakh+ Satisfied Patient</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='main3'>
        <div className='container'>

          <div>
            <h1 className='wh'>AWARDS & ACHIVEMENTS</h1>
            <Slider {...settings}>
              <div>
                <div className='text-center1'>
                  <img src={require('./image/Awards1.jpg')} className='in'></img>
                </div>
              </div>
              <div>
                <div className='text-center1'>
                  <img src={require('./image/Awards2.jpg')} className='in'></img>
                </div>
              </div>
              <div>
                <div className='text-center1'>
                  <img src={require('./image/Awards3.jpg')} className='in'></img>
                </div>
              </div>
              <div>
                <div className='text-center1'>
                  <img src={require('./image/Awards4.jpg')} className='in'></img>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;