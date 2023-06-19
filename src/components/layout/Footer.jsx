import { styled } from 'styled-components';
import Socials from '../components/Socials';
import { rem } from '../../utils/utils';

export default function Footer() {
  return (
    <Container>
      <Socials />

      <div>
        © 2023 <span>@pronoia9</span>. All rights reserved
      </div>

      <div>
        Originally by <span>bslthemes</span>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  padding: ${rem(60)} ${rem(12)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--c-lineShadow);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  line-height: 37px;

  span {
    color: var(--c-accent);
  }

  svg {
    max-width: ${rem(22)};
    max-height: ${rem(22)};
  }

  @media (max-width: ${rem(767)}) {
    flex-direction: column;
  }
`;
