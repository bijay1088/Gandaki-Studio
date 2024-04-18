import React from 'react'
import './Package.css'
import Carousel from 'react-bootstrap/Carousel';
import PhotoCamera from '../../assets/photoCamera.png';
import VideoCamera from '../../assets/videoCamera.png';

const Package = () => {
  return (
    <div className='cusContainer package mt-5'>
      <Carousel interval={10000} className='cusCarousel'>
        <Carousel.Item>
          <img
            className="cusImg"
            src={VideoCamera}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Video Package</h3>
            <p>We provide excellent video service to record your special day.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="cusImg"
            src={PhotoCamera}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Photo Package</h3>
            <p>We provide excellent photography for capturing your special day.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Package
