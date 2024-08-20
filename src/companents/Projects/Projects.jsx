import React from 'react'
import project1 from './img/Screenshot 2024-06-13 161953.png'
import project2 from './img/Screenshot 2024-06-20 152622.png'
import project3 from './img/Screenshot 2024-06-20 152731.png'
import project4 from './img/Screenshot 2024-06-20 153106.png'


import down from './img/icons8-вниз-64.png'
import './project.css'
import { Link, Route } from 'react-router-dom'
function Projects() {
  const projects = [
    {
      id: 1,
      img: project1,
      name: "Start ",
      link: 'https://practise-first-project.vercel.app/'
    },
    {
      id: 2,
      img: project2,
      name: "FoodShop",
      link: 'https://food-order-nu-three.vercel.app/'

    },
    {
      id: 3,
      img: project3,
      name: "MyTeam",
      link: 'https://myteam-repository.vercel.app/'
    },
    {
      id: 4,
      img: project4,
      name: "PizzaShop",
      link: 'https://pizza2-ten.vercel.app/index.html'
    },
  ]

  return (
    <div className='projects container' id='project'>
      <h1>Projets</h1>
      {/* <ul className='types_project'>
        <li className='types_li'><button>All</button></li>
        <li className='types_li'><button>React</button></li>
        <li className='types_li'><button>Responsive</button></li>
        <li className='types_li'><button>Working</button></li>
        <li className='types_li'><button>Verstka</button></li>
      </ul> */}
      <div className="project_wrapper">
        {
          projects.map((item, index) => (
            <a href={item.link}>
              <div key={index} className="cart">
                <img className='cart_img' src={item.img} alt="" />
                <h2 className='item_name' data-aos="zoom-in" >{item.name}  <br /> </h2>

              </div>
            </a>
          ))
        }
      </div >
    </div >
  )
}

export default Projects