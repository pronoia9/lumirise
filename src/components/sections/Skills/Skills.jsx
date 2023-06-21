import { Grid, SkillCard } from '../..';
import { SectionWrapper } from '../../../hoc';
import { dataStore } from '../../../store/dataStore';

const Skills = () => {
  const data = dataStore((state) => state.skills);
  return (
    <Grid size='m'>
      {data.map((skill, index) => (
        <SkillCard key={`skill-${index}`} {...skill} />
      ))}
    </Grid>
  );
};

export default SectionWrapper(Skills, 'skills');
