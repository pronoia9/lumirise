import { css, styled } from 'styled-components';

export default function Grid({ children, size }) {
  return <Container size={size}>{children}</Container>;
};

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;

  ${({ size }) =>
    size === 'l'
      ? css`
          @media (max-width: 1100px) {
            grid-template-columns: repeat(2, 1fr);
          }

          @media (max-width: 767px) {
            grid-template-columns: 1fr;
          }
        `
      : size === 'm'
      ? css`
          @media screen and (max-width: 900px) {
            grid-template-columns: repeat(2, 1fr);
          }

          @media screen and (max-width: 580px) {
            grid-template-columns: 1fr;
          }
        `
      : css`
          @media (max-width: 1024px) {
            grid-template-columns: repeat(2, 1fr);
          }

          @media (max-width: 767px) {
            grid-template-columns: 1fr;
          }
        `}
`;
