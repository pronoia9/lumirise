import { Grid } from '../..';
import { SkillCard } from '.';
import { SectionWrapper } from '../../../hoc';
import { skillsData } from '../../../utils/data';

const Skills = () => {
  return (
    <Grid size='m'>
      {skillsData.map((skill, index) => (
        <SkillCard key={`skill-${index}`} {...skill} />
      ))}
    </Grid>
  );
};

export default SectionWrapper(Skills, 'skills');
