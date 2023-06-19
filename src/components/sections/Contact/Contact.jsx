import { useState } from 'react';
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

  const reset = () => {
    setFormData(contactData.defaultForm);
    setMessage({ type: '', message: '' });
  }

  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = () => {}

  return (
    <div>
      <Grid columns={2}>
        <ContactInfo />

        {/* Form */}
        <Grid columns={1} gap={rem(30)}>
          {/* Inputs */}
          <Grid columns={2} gap={rem(30)}>
            {Object.keys(contactData.defaultForm).slice(0, 2).map((field) => (
              <Input key={`form-${field}`} field={field} value={formData[field]} handlechange={handleFormChange} />
            ))}
          </Grid>
          {Object.keys(contactData.defaultForm).slice(2).map((field) => (
            <Input key={`form-${field}`} field={field} value={formData[field]} handlechange={handleFormChange} />
          ))}

          {/* Button */}
          <ButtonContainer alert={`${message.type === 'error'}`} message={`${message.message.length > 0}`}>
            <p>{message.message || '* Required Fields'}</p>
            <div onClick={handleClick}>
              <UnfilledButton>
                <p>Send Message</p>
              </UnfilledButton>
            </div>
          </ButtonContainer>
        </Grid>
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