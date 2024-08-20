import React from 'react'
import './introduction.css'
function Introduction() {
  return (

    <div id='home' className='introduction'>

      <div className="introduction_wrapper container">
        <p data-aos="fade-down" data-aos-duration="600" className='welcome_int'>Welcome to my portfolio</p>
        <div className="introduction_name">
          <p >Hello I am</p>
          <p>  Muhammadziyo Nazarov</p>

        </div>
        <div className="int_info_1">
          <p data-aos="fade-down-right" data-aos-duration="1500">Web developer ,</p>
          <p data-aos="fade-down-left" data-aos-duration="1500">Software engineer ,</p>
        </div>
        <div className="int_info_2">
          <p data-aos="fade-up-right" data-aos-duration="1500">Freelancer ,</p>
          <p data-aos="fade-up-left" data-aos-duration="1500">Front-end developer ,</p>
        </div>
        <button><a href="#contact">CONTACT ME</a></button>
      </div>
    </div>
  )
}

export default Introduction