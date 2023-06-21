import { styled } from 'styled-components';

import { Grid, ExperienceColumns } from '../..';
import { SectionWrapper } from '../../../hoc';
import { dataStore } from '../../../store/dataStore';

const Experience = () => {
  const data = dataStore((state) => state.experience);

  return (
    <Container>
      <Grid columns={2} gap='25px'>
        <Flexbox>
          <ExperienceColumns column='Education' data={data.education} />
          <ExperienceColumns column='Activities' data={data.activities} />
        </Flexbox>
        <ExperienceColumns column='Courses' data={data.courses} />
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
  gap: 2.5rem;
`;
