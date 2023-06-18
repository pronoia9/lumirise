import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { Grid } from '../';
import { ExperienceColumns } from './Experience/index';
import { SectionWrapper } from '../../hoc';
import { histroyData } from '../../utils/data';

const Experience = () => {
  return (
    <Container>
      <Grid columns={2} gap='25px'>
        <Flexbox>
          <ExperienceColumns column='Education' data={histroyData.education} />
          <ExperienceColumns column='Activities' data={histroyData.activities} />
        </Flexbox>
        <ExperienceColumns column='Courses' data={histroyData.courses} />
      </Grid>
    </Container>
  );
};
export default SectionWrapper(Experience, 'experience');

const Container = styled.div``;

const Flexbox = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
