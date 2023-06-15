import { styled } from 'styled-components';
import { heroData } from '../../utils/data';
import Socials from '../Socials';
import { SubtitleWithAccent, SubtitleWithHandwriting, Title } from '../../styles/TextStyles';

export default function HeroTitle() {
  const { name, occupation, intro } = heroData;

  return (
    <div>
      {/* Title */}
      <div>
        {/* Subtitle Top */}
        <SubtitleWithAccent><p>Hello, <span>my name is</span></p></SubtitleWithAccent>
        {/* Title */}
        <Title><span>{name.split(' ')[0]}</span> {name.split(' ')[1]}</Title>
        {/* Subtitle Bottom */}
        <SubtitleWithHandwriting>I am a <span>{ occupation }</span></SubtitleWithHandwriting>
      </div>

      {/* Description */}
      <div>
        <div>
          <p>{intro}</p>
        </div>
      </div>

      {/* Socials */}
      <Socials />

      {/* Download Button */}
      <div></div>
    </div>
  );
}

const Description = styled.div``;

const Download = styled.div``;