import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider.css';
import { Carousel,Spinner } from 'react-bootstrap';
function Slider() {
    return (
        <div className='space'>
        <Carousel >
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={require('./image/p1.jpg')}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={require('./image/p2.jpg')}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={require('./image/p3.jpg')}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={require('./image/p4.jpg')}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={require('./image/p5.jpg')}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={require('./image/p6.jpg')}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={require('./image/p7.jpg')}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>
    );
}   

export default Slider;