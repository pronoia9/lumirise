import { Grid } from '../..';
import { WorksCard } from '.';

export default function WorksGrid({ projects, count, filterKey }) {
  return (
    <Grid size='l' gap='40px'>
      {projects.slice(0, count).map((project, index) => (
        <WorksCard key={`projects-${filterKey}-${index}`} filterKey={filterKey} project={project} index={index} />
      ))}
    </Grid>
  );
}
