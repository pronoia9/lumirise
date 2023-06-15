import { styled } from 'styled-components';

export default function HeroBackgroundText({ text }) {
  return (
    <Container className='lui-bgtitle'>
      <span>{text}</span>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  top: -50px;
  top: 50px;
  left: -50%;
  width: 200%;
  font-size: 22rem;
  font-family: var(--f-secondary);
  color: ${({ theme }) => theme.backgroundTitle};
  font-weight: bold;
  line-height: 1px;
  text-align: center;
  white-space: nowrap;
  pointer-events: none;
`;
