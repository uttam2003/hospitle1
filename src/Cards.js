import { BsArrowRight } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards.css';
import { Card, Button, Spinner } from 'react-bootstrap';
function Cards() {
    return (
        <div className='content'>
            <div className='row m1'>
                <div className='col'>
                    <p className='color'>HEALTHY SKIN AND NATURAL</p>
                </div>
            </div>
            {/* <div className='container'> */}
            <p className='line'>Treatments & Services</p>
            
            <div className='container'>
                <div className='row p1'>
                    
                        <div className="col p2">
                            <img src={require('./image/r1.jpg')} className='r1'></img>
                            <h3>Derma Roller</h3>
                            <button className='btn'>Read More  <BsArrowRight className='btn1' /></button>
                        </div>
                        <div className="col p2">
                            <img src={require('./image/r2.jpg')} className='r1'></img>
                            <h3>Chemical peeling</h3>
                            <button className='btn'>Read More  <BsArrowRight className='btn1' /></button>
                        </div>
                        <div className="col p2">
                            <img src={require('./image/r3.jpg')} className='r1'></img>
                            <h3>body percing</h3>
                            <button className='btn'>Read More  <BsArrowRight className='btn1' /></button>
                        </div>
                        <div className="col p2">
                            <img src={require('./image/r4.jpg')} className='r1'></img>
                            <h3>tatoo designing</h3>
                            <button className='btn'>Read More  <BsArrowRight className='btn1' /></button>
                        </div>
                   
                </div>
            </div>

            <div className='container'>
                <div className='row p1'>
                    <div className='col p2'>
                            <img src={require('./image/r5.jpg')} className='r1'></img>
                            <h3>inotopharesis</h3>
                            <button className='btn'>Read More  <BsArrowRight className='btn1' /></button>
                    </div>
                    <div className='col p2'>
                            <img src={require('./image/r6.jpg')} className='r1'></img>
                            <h3>vitiligo surgery</h3>
                            <button className='btn'>Read More  <BsArrowRight className='btn1' /></button>
                    </div>
                    <div className='col p2'>
                            <img src={require('./image/r7.jpg')} className='r1'></img>
                            <h3>botox</h3>
                            <button className='btn'>Read More  <BsArrowRight className='btn1' /></button>
                    </div>
                    <div className='col p2'>
                            <img src={require('./image/r8.jpg')} className='r1'></img>
                            <h3>puva therapy</h3>
                            <button className='btn'>Read More  <BsArrowRight className='btn1' /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cards;
