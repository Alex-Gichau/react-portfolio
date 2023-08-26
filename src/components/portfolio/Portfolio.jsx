import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/alex2.png';


// Array containing PORTFOLIOS -- 
const data = [
  {
    id:1,
    image:'https://mir-s3-cdn-cf.behance.net/projects/808/1acf6e140736935.Y3JvcCwzMTcwLDI0ODAsMTY0LDA.jpg',
    title:'Geeshau Art | Behance Portfolio',
    link:'https://www.behance.net/gallery/106640069/Geeshau-Art-Portfolio',
    preview:'https://www.behance.net/gallery/106640069/Geeshau-Art-Portfolio'
  },
  {
    id:2,
    image:'https://img.playbook.com/qM26QVbBvrnkUBMUlBxK0udIgdtaliSzazEDKr0m0s8/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzgxNGZjNWU3/LTU0MDEtNDM2ZS1h/ZGYwLWNjZDgwNjc3/YTg1Nw',
    title:'Geeshau Art | Playbook Portfolio',
    link:'https://www.playbook.com/geeshauposters#:~:text=%E2%80%BA-,Quick%20look,-%3F', 
    //todo: Create embedded frame for the elements in the link - Do for all
    preview:'https://www.playbook.com/geeshauposters/C3TgsXmb8VeYRwnSonVTqUcZ'
  },
  {
    id:3,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnoEsQ-E98la2aS-iVARPW2SHavqiDKQfbyovTqkCcBtq6FMd8',
    title:'Urban Real Estate | Figma',
    link:'https://www.figma.com/file/w36SHhtyIiZQg6OfAgG9Fy/Urban-Strategies-Estate?type=design&mode=design&t=K0oN79HozPCUG0CW-1', 
    //todo: Create embedded frame for the elements in the link - Do for all
    preview:'https://www.figma.com/file/w36SHhtyIiZQg6OfAgG9Fy/Urban-Strategies-Estate?type=design&mode=design&t=K0oN79HozPCUG0CW-1'
  },
  {
    id:4,
    image:'https://i.ytimg.com/an_webp/Xa97087O8D0/mqdefault_6s.webp?du=3000&sqp=CK_5pqcG&rs=AOn4CLArM6UdBW060aPAyIMxi52vbIcLMQ',
    title:'Red Shoes Animation | WOZA KIDS',
    link:'https://www.youtube.com/watch?v=Xa97087O8D0&t=64s', 
    //todo: Create embedded frame for the elements in the link - Do for all
    preview:'https://www.youtube.com/watch?v=Xa97087O8D0&t=64s'
  },
  {
    id:5,
    image:'https://i.ytimg.com/an_webp/G1p_6FHlzx8/mqdefault_6s.webp?du=3000&sqp=COzypqcG&rs=AOn4CLDd7Ciq5750Wvo8vTwRrfSSIidi2g',
    title:'Down in my Heart | Nursery rhymes | WOZA KIDS',
    link:'https://www.youtube.com/watch?v=BJl2-av9hFo', 
    //todo: Create embedded frame for the elements in the link - Do for all
    preview:'https://www.youtube.com/watch?v=BJl2-av9hFo'
  },
  {
    id:6,
    image:'https://i.ytimg.com/vi/a8fkw0JJwzg/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYQyATKH8wDw==&rs=AOn4CLDJsGJRWmz1BVqKfKZnyFSN2-LeqA',
    title:'Bartolito Songs | Nursery rhymes | WOZA KIDS',
    link:'https://www.youtube.com/watch?v=BJl2-av9hFo', 
    //todo: Create embedded frame for the elements in the link - Do for all
    preview:'https://www.youtube.com/watch?v=BJl2-av9hFo'
  },
  {
    id:7,
    image:'https://i.ytimg.com/an_webp/yeG86jp5brM/mqdefault_6s.webp?du=3000&sqp=CMLNpqcG&rs=AOn4CLB-PpTTFUXyfI7M14rjLOkikwBxbQ',
    title:'5 Oceans Song | Nursery Rhymes | WOZA KIDS',
    link:'https://www.youtube.com/watch?v=BJl2-av9hFo', 
    //todo: Create embedded frame for the elements in the link - Do for all
    preview:'https://www.youtube.com/@WozaKids'
  },
  {
    id:8,
    image:'https://i9.ytimg.com/vi/Q2-nAoV8VAY/mqdefault.jpg?sqp=CLyAp6cG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgSihCMA8=&rs=AOn4CLArHTgjugasKtIFhQnI8HHuncD6QA',
    title:'Brigade Report Video | PCEA Juja Township',
    link:'https://www.youtube.com/@pceajujatownship', 
    //todo: Create embedded frame for the elements in the link - Do for all
    preview:'https://www.youtube.com/@pceajujatownship'
  },
  {
    id:9,
    image:'https://i9.ytimg.com/vi/kvsutIuh6F4/mqdefault.jpg?sqp=CLyAp6cG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEEgOih_MA8=&rs=AOn4CLDSYHFvadWzzKszrBLl_5nsAnt9Ng',
    title:'Nifanye Kama Wewe | Unifinyange | PCEA Juja Township',
    link:'https://www.youtube.com/@pceajujatownship', 
    //todo: Create embedded frame for the elements in the link - Do for all
    preview:'https://www.youtube.com/@pceajujatownship'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recents Works</h5>
      <h2>Projects, Animations & Videos</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,link,preview}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
            <a href={link} className='btn'>
              More Details
            </a>
            <a
              href={preview}
              className='btn btn-primary'
              target='_blank' rel="noreferrer"
            >
              Live Preview
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
