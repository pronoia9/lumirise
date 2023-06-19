import { useState } from 'react';
import { styled } from 'styled-components';

import { Grid } from '../..';
import { SectionWrapper } from '../../../hoc';
import { contactData } from '../../../utils/data';
import Input from './Input';
import { rem } from '../../../utils/utils';

const Contact = () => {
  const [formData, setformData] = useState(contactData.defaultForm);

  const handleChange = (e) => {
    setformData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Container>
      <Grid columns={2}>
        {/* LEFt */}

        {/* FORM */}
        <FormContainer>
          <div>
            {Object.keys(contactData.defaultForm)
              .slice(0, 2)
              .map((field) => (
                <Input key={`form-${field}`} field={field} value={formData[field]} handlechange={handleChange} />
              ))}
          </div>
          {Object.keys(contactData.defaultForm)
            .slice(2)
            .map((field) => (
              <Input key={`form-${field}`} field={field} value={formData[field]} handlechange={handleChange} />
            ))}
        </FormContainer>
      </Grid>
    </Container>
  );
};

export default SectionWrapper(Contact, 'contact');

const Container = styled.div``;

const FormContainer = styled.div`
  &,
  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${rem(30)};
  }

  & > div:first-child {
    flex-direction: row;
  }
`;
