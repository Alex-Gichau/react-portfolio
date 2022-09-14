import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/cam.jpg';


// Array containing PORTFOLIOS -- 
const data = [
  {
    id:1,
    image:IMG1,
    title:'Crypto Currency Dashboard',
    github:'https://github.com/Alex-Gichau',
    demo:'https://github.com/Alex-Gichau'
  },
  {
    id:2,
    image:IMG1,
    title:'Crypto Currency Dashboard',
    github:'https://github.com/Alex-Gichau',
    demo:'https://github.com/Alex-Gichau'
  },
  {
    id:3,
    image:IMG1,
    title:'Crypto Currency Dashboard',
    github:'https://github.com/Alex-Gichau',
    demo:'https://github.com/Alex-Gichau'
  },
  {
    id:4,
    image:IMG1,
    title:'Crypto Currency Dashboard',
    github:'https://github.com/Alex-Gichau',
    demo:'https://github.com/Alex-Gichau'
  },
  {
    id:5,
    image:IMG1,
    title:'Crypto Currency Dashboard',
    github:'https://github.com/Alex-Gichau',
    demo:'https://github.com/Alex-Gichau'
  },
  {
    id:6,
    image:IMG1,
    title:Crypto,
    github:'https://github.com/Alex-Gichau/react-portfolio',
    demo:'https://github.com/Alex-Gichau'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recents Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,github,demo}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
            <a href={github} className='btn'>
              Github
            </a>
            <a
              href={demo}
              className='btn btn-primary'
              target='_blank' rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
            )
          }) 
        }

      </div>
    </section>
  );
};

export default Portfolio;
