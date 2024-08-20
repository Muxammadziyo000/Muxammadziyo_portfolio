import "./Skills.css";
import React from 'react'

import { Gauge, gaugeClasses } from "@mui/x-charts"

function Skills() {

  const settings1 = {
    width: 200,
    height: 200,
    value: 80,
  };
  const settings2 = {
    width: 200,
    height: 200,
    value: 90,
  };
  const settings3 = {
    width: 200,
    height: 200,
    value: 50,
  };
  const settings4 = {
    width: 200,
    height: 200,
    value: 40,
  };
  return (
    <div className="skills" id="skills">
      <div className="skills_wrapper container">

        <div className="skill">
          <Gauge
            {...settings1}
            cornerRadius="50%"
            sx={(theme) => ({
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: 40,
                color: '#FFF'

              },

              [`& .${gaugeClasses.valueArc}`]: {
                fill: '#0FE1C2',
              },
              [`& .${gaugeClasses.referenceArc}`]: {
                fill: '#072424',
              },
            })}
          />
          <h4>HTML</h4>
        </div>
        <div className="skill">
          <Gauge
            {...settings2}
            cornerRadius="50%"
            sx={(theme) => ({
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: 40,
                color: '#FFF'
              },
              [`& .${gaugeClasses.valueArc}`]: {
                fill: '#0FE1C2',
              },
              [`& .${gaugeClasses.referenceArc}`]: {
                fill: '#072424',
              },
            })}
          />
          <h4>CSS</h4>
        </div>
        <div className="skill">
          <Gauge
            {...settings3}
            cornerRadius="50%"
            sx={(theme) => ({
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: 40,
                color: '#FFF'
              },
              [`& .${gaugeClasses.valueArc}`]: {
                fill: '#0FE1C2',
              },
              [`& .${gaugeClasses.referenceArc}`]: {
                fill: '#072424',
              },
            })}
          />
          <h4>JS</h4>
        </div>
        <div className="skill">
          <Gauge
            {...settings4}
            cornerRadius="50%"
            sx={(theme) => ({
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: 40,
                color: '#FFF'
              },
              [`& .${gaugeClasses.valueArc}`]: {
                fill: '#0FE1C2',
              },
              [`& .${gaugeClasses.referenceArc}`]: {
                fill: '#072424',
              },
            })}
          />
          <h4>React</h4>
        </div>


      </div>
    </div>
  )
}

export default Skills

