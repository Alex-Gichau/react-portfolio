import React from 'react';
import './services.css';
import { BsCheckCircle } from 'react-icons/bs';

const Services = () => {
  return (
    <section id='service'>
      <h5>What I do best</h5>
      <h2>My Services</h2>
      <div className='container service__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX Design */}
        <article className='service'>
          <div className='service__head'>
            <h3>Graphics Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF GRAPHICS DESIGN */}
        <article className='service'>
          <div className='service__head'>
            <h3>Video Editting/Animation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF  VIDEO EDITTING*/}
      </div>
    </section>
  );
};

export default Services;