import { styled } from 'styled-components';

export default function Grid({ children }) {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;

  @media (max-width: 1020px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
