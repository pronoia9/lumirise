import { styled } from 'styled-components';
import { rem } from '../../../utils/utils';

export default function Input({ field, value, handlechange }) {
  return (
    <Label>
      Your {field} <span>*</span>
      {field !== 'message' ? (
        <input type={field !== 'email' ? 'text' : 'email'} name={field} value={value} onChange={(e) => handlechange} />
      ) : (
        <textarea name={field} value={value} onChange={(e) => handlechange} />
      )}
    </Label>
  );
}

const Label = styled.label`
  width: 100%;
  padding: 0;
  display: block;
  font-size: ${rem(14)};
  font-weight: 700;
  text-indent: ${rem(30)};
  letter-spacing: 0.05rem;
  text-transform: uppercase;

  span {
    color: var(--c-accent);
  }

  input,
  textarea {
    margin-top: ${rem(10)};
  }
`;
