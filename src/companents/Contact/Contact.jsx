import React from 'react'
import './contact.css'
import mail from '../Projects/img/Vector (2).png'
import inst from '../Projects/img/Group.png'
import github from '../Projects/img/Vector (3).png'
import teleg from '../Projects/img/icons8-telegram-48.png'
function Contact() {
  return (
    <div className='contact ' id='contact'>
      <h1>Contact</h1>
      <div className="contact_wrapper container">

        <div className="left_side">
          <input type="text" placeholder='Name:' />
          <input type="text" placeholder='Email:' />
          <input type="email" placeholder='Massage:' />
          <button>Send</button>
        </div>
        <div className="right_side">
          <h2 data-aos="fade-left" data-aos-duration="1000">DON`T BE SHY</h2>
          <p data-aos="fade-left" data-aos-duration="1300">Feel free to reach out if you have any questions, collaboration opportunities, or just want to connect. I'm always open to new projects and discussions.</p>
          <div className="mail " data-aos="fade-left" data-aos-duration="1500">
            <img src={mail} alt="" />
            <p>Mail me <br /> maximjonsen@gmail.com</p>
          </div>
          <div className="icons " >
            <div data-aos="fade-right" data-aos-duration="3000" className="icon"><a href="https://www.instagram.com/muhammadziyo_228/"><img src={inst} alt="" /></a></div>
            <div className="icon" data-aos="fade-down" data-aos-duration="1000">
              <a href="https://t.me/Genius_0106">  <img src={teleg} alt="" /></a>
            </div>
            <div className="icon" data-aos="fade-left" data-aos-duration="3000">
              <a href="https://github.com/Muxammadziyo000"><img src={github} alt="" /></a>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact