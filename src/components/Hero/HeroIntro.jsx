import { heroData } from '../../utils/data';
import Socials from '../Socials';

export default function HeroTitle() {
  const { name, occupation, intro } = heroData;

  return (
    <div>
      {/* Title */}
      <div>
        {/* Subtitle Top */}
        <div><p>Hello, <span>my name is</span></p></div>
        {/* Title */}
        <h1>
          <span>{name.split(' ')[0]}</span>
          {name.split(' ')[1]}
        </h1>
        {/* Subtitle Bottom */}
        <div>I am a <span>{ occupation }</span></div>
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
