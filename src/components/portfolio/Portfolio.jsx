import React from 'react';
import './portfolio.css';
// import IMG1 from '../../assets/alex2.png';


// Array containing PORTFOLIOS -- 
const data = [
  {
    id:1,
    image:'https://mir-s3-cdn-cf.behance.net/projects/808/1acf6e140736935.Y3JvcCwzMTcwLDI0ODAsMTY0LDA.jpg',
    title:'Geeshau Art | Behance Portfolio',
    details:'https://www.behance.net/mburugichau',
    preview:'https://www.behance.net/gallery/106640069/Geeshau-Art-Portfolio'
  },
  {
    id:2,
    image:'https://img.playbook.com/qM26QVbBvrnkUBMUlBxK0udIgdtaliSzazEDKr0m0s8/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzgxNGZjNWU3/LTU0MDEtNDM2ZS1h/ZGYwLWNjZDgwNjc3/YTg1Nw',
    title:'Geeshau Art | Playbook Portfolio',
    details:'https://www.playbook.com/geeshauposters#:~:text=%E2%80%BA-,Quick%20look,-%3F', 
    //todo: Create embedded frame for the elements in the link - Do for all
    preview:'https://www.playbook.com/geeshauposters/C3TgsXmb8VeYRwnSonVTqUcZ'
  },
  {
    id:3,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnoEsQ-E98la2aS-iVARPW2SHavqiDKQfbyovTqkCcBtq6FMd8',
    title:'Urban Real Estate | Figma',
    details:'https://www.figma.com/file/w36SHhtyIiZQg6OfAgG9Fy/Urban-Strategies-Estate?type=design&mode=design&t=K0oN79HozPCUG0CW-1', 
    //todo: Create embedded frame for the elements in the link - Do for all
    preview:'https://www.figma.com/file/w36SHhtyIiZQg6OfAgG9Fy/Urban-Strategies-Estate?type=design&mode=design&t=K0oN79HozPCUG0CW-1'
  },
  {
    id:4,
    image:'https://i.ytimg.com/an_webp/YbCyjzBuyug/mqdefault_6s.webp?du=3000&sqp=CLD3qKcG&rs=AOn4CLBNb3rFxZXRQvK4jFsRRUcpdfOOHg',
    title:'The State of MISSOURI | Counties of MISSOURI',
    details:'https://www.youtube.com/@WozaKids', 
    //todo: Create embedded frame for the elements in the link - Do for all
    preview:'https://www.youtube.com/watch?v=Xa97087O8D0&t=64s'
  },
  {
    id:5,
    image:'https://i.ytimg.com/vi/ATkND2NA7o8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQys_wkS1Bie1zLkKS_mAKrBuguw',
    title:'Dwarf Planet Song | Nursery Songs',
    details:'https://www.youtube.com/@WozaKids', 
    //todo: Create embedded frame for the elements in the link - Do for all
    preview:'https://www.youtube.com/watch?v=BJl2-av9hFo'
  },
  {
    id:6,
    image:'https://i.ytimg.com/vi/BJl2-av9hFo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMsjBxVs2rvBl9WnrQEujPw3Stow',
    title:'Bartolito Songs | Nursery rhymes | WOZA KIDS',
    details:'https://www.youtube.com/@WozaKids', 
    //todo: Create embedded frame for the elements in the link - Do for all
    preview:'https://www.youtube.com/watch?v=BJl2-av9hFo'
  },
  {
    id:7,
    image:'https://i.ytimg.com/vi/bwHKm3PoUtA/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIFkoLjAP&rs=AOn4CLBpgWHibkvbHj-RNT1KJo4W2G_b2w',
    title:'Ants Marching Song | Nursery Rhymes | Kids Songs Lyric',
    details:'https://www.youtube.com/@WozaKids', 
    //todo: Create embedded frame for the elements in the link - Do for all
    preview:'https://www.youtube.com/watch?v=BJl2-av9hFo'
  },
  {
    id:8,
    image:'https://i.ytimg.com/an_webp/pcV35LlQrc8/mqdefault_6s.webp?du=3000&sqp=CLafqacG&rs=AOn4CLCM--M_YhE2Gfbm85E4pHS_uCW7Rw',
    title:'Brigade Report Video | PCEA Juja Township',
    details:'https://www.youtube.com/@pceajujatownship', 
    //todo: Create embedded frame for the elements in the link - Do for all
    preview:'https://www.youtube.com/@pceajujatownship'
  },
  {
    id:9,
    image:'https://i.ytimg.com/vi/pFD3jTD4XQU/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA5Glh-s9IcGkM07G-L6i3BGVe4-g',
    title:'PCEA Juja Township Branding',
    details:'https://www.youtube.com/@WozaKids', 
    //todo: Create embedded frame for the elements in the link - Do for all
    preview:'https://www.youtube.com/watch?v=BJl2-av9hFo'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recents Works</h5>
      <h2>Projects, Animations & Videos</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,details,preview}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
            <a href={details} className='btn'>
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
