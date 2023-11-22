import React, { useState } from 'react';
import premiumBurger from '../../assets/burger2.png';
import Popup from 'reactjs-popup';
import { FieldValueContextImpl } from 'twilio/lib/rest/autopilot/v1/assistant/fieldType/fieldValue';


const Contact = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
  });
  const [feedback, setFeedback] = useState('')

  const handleSubmission = e => {
    e.preventDefault();    
    // {<Popup>Thanks for contacting us! We will get back to you shortly.</Popup>}
    setContact('');
    setFeedback('');
    alert('Thanks for contacting us! We will get back to you shortly.')
  }

  const handleContactInput = e => {
    const {name, value} = e.target;
  
    setContact(prev => (
      {...prev, [name]: value}
    )
  )
  }

  const handleFeedbackInput = e => {
    setFeedback(e.target.value);
  }

  return (
    <>
      <div className='contact'>
        <form onSubmit={handleSubmission}>
          <h2>contant us</h2>
          <input 
            type='text'
            name='name'
            placeholder='name'
            value={contact.name}
            onChange={handleContactInput}
            required
          />
          <input 
            type='email'
            name='email'
            placeholder='email'
            value={contact.email}
            onChange={handleContactInput}
            required
          />
          <textarea 
            type='text'
            placeholder='Please let me know your feedback.'
            rows='8'
            value={feedback}
            onChange={handleFeedbackInput}
            required
          />
          <button>Send</button>
        </form>

        <div className='formBorder'>
          <div>
            <img src={premiumBurger} alt='premiumBurger'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact