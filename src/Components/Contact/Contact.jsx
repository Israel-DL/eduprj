import React from 'react'
import './Contact.css'
import msg from '../../assets/msg.png'
import email from '../../assets/email.png'
import phone from '../../assets/phone.png'
import location from '../../assets/location.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", process.env.REACT_APP_API_KEY);
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send me a message <img src={msg} alt="" className='msg'/></h3>
            <p>Looking to create a website like this, or even better? Let's bring your vision to life. Feel free to reach out to me through the contact form or use any of my contact information below today to discuss how I can help you build a website that meets your needs and exceeds your expectations.</p>
            <ul>
                <li><img src={email} alt="" className='email'/>israelmakanjuola7@gmail.com</li>
                <li><img src={phone} alt="" className='phone'/>+2347041660234</li>
                <li><img src={location} alt="" className='location'/>Lagos State, Nigeria</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label> Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label> Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                <label> Email Address</label>
                <input type="email" name='email' placeholder='Enter your email address' required/>
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message here' required></textarea>
                <button type='submit' className='btn dark-btn'>Send Message <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact