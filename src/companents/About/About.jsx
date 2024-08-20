import React from 'react'
import './about.css'
function About() {
  return (
    <div className='about'>
      <div className="about_wrapper container">
        <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600" id='about'> About Me</h1>
        <h4>Personal info</h4>
        <div className="div_info_about">
          <div className="pesonal_info_div_1" data-aos="fade-right" data-aos-duration="1000">
            <p>FirstName <br />
              Age <br />
              Freelance <br />
              Phone <br /></p>
            <p>
              : <br />
              : <br />
              : <br />
              : <br />
            </p>
            <p>
              Muhammadziyo <br />
              18 <br />
              Available <br />
              +998 ********* <br />
            </p>

          </div>
          <div className="pesonal_info_div_1" data-aos="fade-left" data-aos-duration="1000">
            <p>Last Name<br />
              Nationality <br />
              Languages <br />
              Email<br /></p>
            <p>
              : <br />
              : <br />
              : <br />
              : <br />
            </p>
            <p>
              Nazarov<br />
              Uzbek <br />
              English, Russian , Uzbek<br />
              maximjonsen@gmail.com <br />
            </p>

          </div>

        </div>
      </div>
    </div>
  )
}

export default About