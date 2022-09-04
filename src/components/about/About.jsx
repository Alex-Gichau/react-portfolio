import React from 'react';
import './about.css';
import ME from '../../assets/alexME.JPG';
import { BsFillAwardFill } from 'react-icons/bs';
import { TbBuildingSkyscraper } from 'react-icons/tb';

const About = () => {
  return (
    <section id='about'>
      <h5>Who is Gichau</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <BsFillAwardFill className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Experience</small>
            </article>

            <article className='about__card'>
              <TbBuildingSkyscraper className='about__icon' />
              <h5>Cooperate Employers</h5>
              <small>Cooperates I have worked for</small>
            </article>

            <article className='about__card'>
              <TbBuildingSkyscraper className='about__icon' />
              <h5>Projects</h5>
              <small>Animations, Streaming and Branding</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            aperiam quasi modi sint dolorum atque deleniti consequuntur itaque
            cum! Beatae, earum impedit. Dolor, delectus mollitia. Ea facilis
            placeat quasi beatae!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
