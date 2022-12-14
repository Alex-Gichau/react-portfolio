import React from 'react';
import './testimonials.css'
import AVT1 from '../../assets/avatar.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
{
  avatar:AVT1,
  name:'Tina Snow',
  review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dicta, aliquam quae earum corporis nesciunt ratione modi voluptate repellat necessitatibus ipsa tenetur unde dignissimos molestias quos? Ipsum dolorum doloribus optio.',
},

{
  avatar:AVT1,
  name:'Tina Snow',
  review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dicta, aliquam quae earum corporis nesciunt ratione modi voluptate repellat necessitatibus ipsa tenetur unde dignissimos molestias quos? Ipsum dolorum doloribus optio.',
},

{
  avatar:AVT1,
  name:'Tina Snow',
  review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dicta, aliquam quae earum corporis nesciunt ratione modi voluptate repellat necessitatibus ipsa tenetur unde dignissimos molestias quos? Ipsum dolorum doloribus optio.',
},

{
  avatar:AVT1,
  name:'Tina Snow',
  review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dicta, aliquam quae earum corporis nesciunt ratione modi voluptate repellat necessitatibus ipsa tenetur unde dignissimos molestias quos? Ipsum dolorum doloribus optio.',
},

]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from Clients/Employers</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }} >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt='avatar' />
              </div>
              <h5>{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
    
  )
}

export default Testimonials