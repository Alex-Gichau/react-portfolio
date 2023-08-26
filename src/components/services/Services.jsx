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
              <p>Illustrate design ideas using storyboards, process flows and sitemaps.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Develop UI mockups and prototypes.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Create original graphic designs .e.g. images, sketches and tables.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Identify and troubleshoot UX problems .e.g. responsiveness.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Conduct layout adjustments based on user feedback.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Adhere to style standards on fonts, colors and images.</p>
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
              <p>Advanced Image Editing: Proficiency in Adobe Photoshop for complex image retouching, color correction, and manipulation.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Vector Illustration: Skillful use of Adobe Illustrator to create intricate vector graphics, logos, and illustrations.

</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Layout and Typography: Ability to design visually appealing layouts using Adobe InDesign, with a keen eye for typography and hierarchy.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Photo Manipulation: Skill in combining and blending images seamlessly using advanced techniques in Photoshop.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Logo Design: Proficiency in creating unique and versatile logos that represent brands effectively using Illustrator.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>UI/UX Design: Creating user-centric interfaces and user experiences for websites and apps using Adobe XD.</p>
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
              <p>Seamless Editing: Proficiency in Adobe Premiere Pro for editing and assembling video clips.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Audio Enhancement: Expertise in refining audio quality, syncing sound, and incorporating background music using Adobe Audition.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Character Animation: Creating simple character animations, including walk cycles, gestures, and expressions</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Scene Setup: Setting up scenes, layers, and keyframes to bring static elements.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Storytelling Through Animation: Using animation to convey stories, ideas, or messages</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Layer and Composition Management: Organizing layers, compositions, and assets to ensure efficient workflow.</p>
            </li>
          </ul>
        </article>
        {/* END OF  VIDEO EDITTING*/}
      </div>
    </section>
  );
};

export default Services;