import { styled } from 'styled-components';
import { SectionSubtitle, SectionTitle } from '../styles/TextStyles';

export default function SectionHeading({ title, subtitle }) {
  return (
    <Container>
      <SectionTitle>{title}</SectionTitle>
      <SectionSubtitle>
        <span>
          {subtitle.split(' ')[0]} <span>{subtitle.split(' ')[1]}</span>
        </span>
      </SectionSubtitle>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 60px;
  position: relative;
`;
