import React from 'react'
import './education.css'
import stages from './img/Group 39.png'
function Educaton() {
  return (
    <div className='education' id='education'>
      <div className="education_wrapper container">
        <h1 className='education_title'>Education</h1>
        <div className="education_content">
          <h1>Currently <br /> studying at <br /> Murabba  <br />Academy</h1>

          <div className="stages">
            <img src={stages} alt="" />
            <div className="stages_div">
              <div className="2024_2026 " data-aos="fade-left" data-aos-duration="1000">
                <h4>2024-2026</h4>
                <h3>Full-time-Developer</h3>
                <p>Seniour developer <br />
                  Full stack programmer <br />
                  Dev at big company</p>
              </div>
              <div className="a023_2024" data-aos="fade-left" data-aos-duration="1000">
                <h4>2023-2024</h4>
                <h3>First stage of styding</h3>
                <p>Freeleancer<br />
                  Student in Digital Academy <br />
                  Juniour</p>
              </div>
              <div className="a022_2023" data-aos="fade-left" data-aos-duration="1000">
                <h4>2022-2023</h4>
                <h3>School boy</h3>
                <p>Math,Chemistry, English <br />
                  Information courses  <br />
                  First start</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Educaton