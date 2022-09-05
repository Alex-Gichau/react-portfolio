import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/avatar.jpg'

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

      <div className="container testimonials_container">
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <article key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt='avatar' />
              </div>
              <h5>{name}</h5>
              <small className="client__review">{review}</small>
            </article>
            )
          })
        }

      </div>
    </section>
    
  )
}

export default Testimonials