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
        {/* <Flexbox columns={1}> */}
        <ExperienceColumns column='Education' data={histroyData.education}>
          <ExperienceColumns column='Activities' data={histroyData.activities} />
        </ExperienceColumns>
        {/* </Flexbox> */}
        <ExperienceColumns column='Courses' data={histroyData.courses} />
      </Grid>
    </Container>
  );
};
export default SectionWrapper(Experience, 'experience');

const Container = styled.div``;

const Flexbox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
