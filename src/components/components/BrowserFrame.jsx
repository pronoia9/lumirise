import { styled } from 'styled-components';

import { BrowserSVGs } from '..';

const SvgContainer = ({ type }) => (<SvgContainerContainer><BrowserSVGs type={type} /></SvgContainerContainer>);

export default function BrowserFrame({ link = '', handleClick }) {
  return (
    <Container>
      <Frame className='browser-controls'>
        <Controls className='browser-controls'>
          <WindowControls className='window-controls'>
            <span className='close' onClick={() => handleClick('close')} />
            <span className='minimise' onClick={() => handleClick('minimise')} />
            <span className='maximise' onClick={() => handleClick('maximise')} />
          </WindowControls>

          <PageControls className='page-controls'>
            <SvgContainer type='back' onClick={() => handleClick('back')} />
            <SvgContainer type='next' onClick={() => handleClick('next')} />
          </PageControls>

          <UrlBar className='url-bar white-container'>
            <div>{link}</div>
            <SvgContainer type='refresh' onClick={() => handleClick('refresh')} />
          </UrlBar>

          <SvgContainer type='fullscreen' onClick={() => handleClick('fullscreen')} />
        </Controls>

        <iframe src={link} title='Puny Math' />
      </Frame>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Frame = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 3px var(--c-lineShadow);
  overflow: scroll;
  width: 100%;
  min-width: 75%;
  max-width: 85%;
  height: 100%;
  min-height: 75vh;
  max-height: 85vh;
  background-color: var(--c-background2);

  iframe {
    width: 100%;
    height: 100%;
  }
`;

const Controls = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: var(--c-background3);
  color: var(--c-font);

  div {
    height: 25px;
  }
`;

const WindowControls = styled.div`
  margin: 0 2%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  span {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50px;
    &:nth-child(1) {
      background: #ff8585;
    }
    &:nth-child(2) {
      background: #ffd071;
    }
    &:nth-child(3) {
      background: #74ed94;
    }
  }
`;

const PageControls = styled.div`
  flex: 0 0 70px;
  margin-right: 2%;
  display: flex;
  gap: 0.25rem;

  div {
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const UrlBar = styled.div`
  flex-grow: 1;
  margin-right: 2%;
  padding: 0 5px 0 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
  background: var(--c-background2);
  opacity: 0.8;

  div:last-child {
    margin: 0;
  }
`;

const SvgContainerContainer = styled.div`
  margin-right: 2%;
  max-width: 25px;
  max-height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background: var(--c-background2);

  svg {
    max-width: 60%;
    max-height: 60%;
    fill: var(--c-font);
  }
`;
