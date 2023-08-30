import React from 'react';
import './testimonials.css';
// import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';
// import AVT1 from '../../assets/avatar.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar:
      'https://media.licdn.com/dms/image/C4D0BAQF5fHy_NgdZcg/company-logo_100_100/0/1680013934506?e=2147483647&v=beta&t=mqg3G8NGLzJBrUgfii-7-aJw3jDJFxdD62tlzzg7VKk',
    name: 'Just In Faith Foundation',
    review:
      'Amazing business cards, posters and corporate flyers delivered. Grateful for your service. Very much appreciate. ',
  },

  {
    avatar: 'https://uk-pcea.org/images/pcea/pcea-logo.png',
    name: 'PCEA Juja Township Church',
    review:
      'It has been amazing patnering with Alex. We are very happy and proud..',
  },

  {
    avatar:
      'https://media.licdn.com/dms/image/C560BAQGejt4JbAv_wQ/company-logo_100_100/0/1644423880313?e=2147483647&v=beta&t=O_cAaPSCkr2v03OYKcGXLs6RsZUJJNqGmu_SK8lC36E',
    name: 'Just n Faith Media',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dicta, aliquam quae earum corporis nesciunt ratione modi voluptate repellat necessitatibus ipsa tenetur unde dignissimos molestias quos? Ipsum dolorum doloribus optio.',
  },

  {
    avatar: '',
    name: 'Tina Snow',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dicta, aliquam quae earum corporis nesciunt ratione modi voluptate repellat necessitatibus ipsa tenetur unde dignissimos molestias quos? Ipsum dolorum doloribus optio.',
  },
];

const Testimonials = () => {

  // const [value, setValue] = React.useState<number | null>(2);    

  return (
    // <Box
    //   sx={{
    //     '& > legend': { mt: 2 },
    //   }}
    // ></Box>
    
    <section id='testimonials'>
      <h5>Reviews from Clients/Employers</h5>
      <h2>Testimonials</h2>


      {/* <Typography component='legend'>Controlled</Typography>
      <Rating
        name='simple-controlled'
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component='legend'>Read only</Typography>
      <Rating name='read-only' value={value} readOnly /> */}

      <Swiper
        className='container testimonials__container'
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt='avatar' />
              </div>
              <h5>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;