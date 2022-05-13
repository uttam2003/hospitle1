import 'bootstrap/dist/css/bootstrap.min.css';
import { } from 'react-bootstrap';
import './Footer.css';
import { BsTelephoneFill, BsTwitter, BsYoutube } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
function Footer() {
  return (
    <div className='footer_main'>
      <div className='container'>
        <div className='row m4'>
          <h1 className='wh'>AWARDS & ACHIVEMENTS</h1>
          <div className='col-sm'>
            <div className='text-center2'>
              <p className='left1'>Sakhiya skin clinic, an ISO 9001-2008 certified clinic providing the best international quality care services in the field of skin care, hair care, cosmetic treatment, laser treatment and plastic surgery. This international quality clinic is the outcome of more than 20 years of determined efforts</p>
            </div>
          </div>
          <div className='col-sm'>
            <div className='text-center2'>
              <div className='links'>
                <p className='font'>Useful Links</p>
                <div className='top'>
                  <div className='icon'>
                    <img src={require('./image/list-icon.png')} className='float_left'></img>
                    <p className='left'>Home</p>
                  </div>
                  <div className='icon'>
                    <img src={require('./image/list-icon.png')} className='float_left'></img>
                    <p className='left'>About Clinic</p>
                  </div>
                  <div className='icon'>
                    <img src={require('./image/list-icon.png')} className='float_left'></img>
                    <p className='left'>Patient Feedback</p>
                  </div>
                  <div className='icon'>
                    <img src={require('./image/list-icon.png')} className='float_left'></img>
                    <p className='left'>Gallery</p>
                  </div>
                  <div className='icon'>
                    <img src={require('./image/list-icon.png')} className='float_left'></img>
                    <p className='left'>Blog</p>
                  </div>
                  <div className='icon'>
                    <img src={require('./image/list-icon.png')} className='float_left'></img>
                    <p className='left'>Book an Appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm'>
            <div className='text-center2'>
              <div className='links'>
                <p className='font'>Treatments</p>
                <div className='top'>
                  <div className='icon'>
                    <img src={require('./image/list-icon.png')} className='float_left'></img>
                    <p className='left'>Skin Treatments</p>
                  </div>
                  <div className='icon'>
                    <img src={require('./image/list-icon.png')} className='float_left'></img>
                    <p className='left'>Laser Treatments</p>
                  </div>
                  <div className='icon'>
                    <img src={require('./image/list-icon.png')} className='float_left'></img>
                    <p className='left'>Anti Ageing Treatments</p>
                  </div>
                  <div className='icon'>
                    <img src={require('./image/list-icon.png')} className='float_left'></img>
                    <p className='left'>Hair Treatments</p>
                  </div>
                  <div className='icon'>
                    <img src={require('./image/list-icon.png')} className='float_left'></img>
                    <p className='left'>Dermatosurgery</p>
                  </div>
                  <div className='icon'>
                    <img src={require('./image/list-icon.png')} className='float_left'></img>
                    <p className='left'>Plastic Surgery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm'>
            <div className='text-center2'>
              <div className='links'>
                <p className='font'>Contact Info</p>
                <div className='top'>
                  <div className='icon'>
                    <BsTelephoneFill className='float_left'></BsTelephoneFill>
                    <p className='left'> 1800 1200 70000 (Toll Free)</p>
                  </div>
                  <div className='icon'>
                    < MdEmail className='float_left'></MdEmail>
                    <p className='left'>enquiry@sakhiyaskinclinic.com</p>
                  </div>
                  <div className='icon'>
                    <p className='font'>Follow Us On</p>
                  </div>
                  <div className='icon'>
                    <FaFacebookF className='float_left4'></FaFacebookF>
                    <BsTwitter className='float_left4'></BsTwitter>
                    <ImInstagram className='float_left4'></ImInstagram>
                    <BsYoutube className='float_left4'></BsYoutube>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;