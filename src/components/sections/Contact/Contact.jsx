import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { styled } from 'styled-components';

import { Grid } from '../..';
import { ContactInfo, Input } from './';
import { SectionWrapper } from '../../../hoc';
import { UnfilledButton } from '../../../styles/ButtonStyles';
import { contactData } from '../../../utils/data';
import { rem } from '../../../utils/utils';

const Contact = () => {
  const [formData, setFormData] = useState(contactData.defaultForm);
  const [message, setMessage] = useState({ type: '', message: '' });
  const formRef = useRef();
  
  const resetForm = () => {
    setFormData(contactData.defaultForm);
    setMessage({ type: '', message: '' });
  }
  
  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (name && email && subject && message) {
      emailjs
        .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formRef.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
        .then(
          (result) => { setMessage({ type: 'info', message: 'Your message is sent 🎉' }); },
          (error) => { setMessage({ type: 'error', message: 'There was an error sending the message 🫤' }); })
        .finally(() => { setTimeout(() => resetForm(), 10000); })
    }
    else setMessage({ type: 'error', message: '* Required Fields' });
  }

  return (
    <div>
      <Grid columns={2}>
        <ContactInfo />

        <Form ref={formRef} onSubmit={handleSubmit}>
          {/* Inputs */}
          <Grid columns={2} gap={rem(30)} size='m'>
            {Object.keys(contactData.defaultForm).slice(0, 2).map((field) => (
              <Input key={`form-${field}`} field={field} formData={formData} handlechange={handleFormChange} />
            ))}
          </Grid>
          {Object.keys(contactData.defaultForm).slice(2).map((field) => (
            <Input key={`form-${field}`} field={field} value={formData[field]} handlechange={handleFormChange} />
          ))}

          {/* Button */}
          <ButtonContainer alert={`${message.type === 'error'}`} message={`${message.message.length > 0}`}>
            <p>{message.message || '* Required Fields'}</p>
            <button type='submit'>
              <UnfilledButton>
                <p>Send Message</p>
              </UnfilledButton>
            </button>
          </ButtonContainer>
        </Form>
      </Grid>
    </div>
  );
};
export default SectionWrapper(Contact, 'contact');

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${rem(30)};

  & > p {
    color: ${({ alert, message }) => (message === 'true' && (alert === 'true' ? 'red' : 'var(--c-accent)'))};
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 2;
  grid-gap: ${rem(30)};

  button {
    border: none;
    background: none;
  }
`;