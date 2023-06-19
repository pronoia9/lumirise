import { css, styled } from 'styled-components';

import { rem } from '../../utils/utils';

export default function Grid({ children, columns = 3, size, gap }) {
  return (
    <Container columns={columns} size={size} gap={gap}>
      {children}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  grid-gap: ${({ gap }) => gap};

  ${({ size }) =>
    size === 'l'
      ? css`
          @media (max-width: ${rem('1100px')}) {
            grid-template-columns: repeat(${({ columns }) => parseInt(columns) - 1}, 1fr);
          }

          @media (max-width: ${rem('767px')}) {
            grid-template-columns: 1fr;
          }
        `
      : size === 'm'
      ? css`
          @media screen and (max-width: ${rem('900px')}) {
            grid-template-columns: repeat(${({ columns }) => parseInt(columns) - 1}, 1fr);
          }

          @media screen and (max-width: ${rem('580px')}) {
            grid-template-columns: 1fr;
          }
        `
      : css`
          @media (max-width: ${rem('1024px')}) {
            grid-template-columns: repeat(${({ columns }) => parseInt(columns) - 1}, 1fr);
          }

          @media (max-width: ${rem('767px')}) {
            grid-template-columns: 1fr;
          }
        `}
`;
