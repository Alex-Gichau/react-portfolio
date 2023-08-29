import React from 'react';
import { MdAlternateEmail } from 'react-icons/md';
import { TbBrandTwitter } from 'react-icons/tb';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import './contacts.css';
import emailjs from 'emailjs-com';


const Contacts = () => {

    const form = useRef(0);

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_54p30sh', 'service_54p30sh', form.current, 'Kwp5yxK7R-8N17Tk9');

      e.target.reset()

        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    };

    return(
    <section id = "contacts" >
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdAlternateEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>gichaumburu@gmail.com</h5>
            <a href="mailto:gichaumburu@gmail.com">Send a Message</a>
          </article>

          {/* TODO #2 */}
          <article className='contact__option'>
            <TbBrandTwitter className='contact__option-icon' />
            <h4>Twitter</h4>
            <h5>@alexgeeshau</h5>
            <a href="https://twitter.com/messages/compose?recipient_id={4645485147}.">Twitter DM</a>
          </article>


          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>Direct Message Me</h5>
            <a href="https://wa.me/+254799748635">Send a Message</a>
          </article>

        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>

        </form>
      </div>

    </section >
  );
};

export default Contacts;