import { WorksListItem } from './';
import { SectionWrapper } from '../../../hoc';
import { projectsData } from '../../../utils/data';

const WorksList = () => {
  return (
    <div>
      {projectsData.projects.map((project, index) => (
        <WorksListItem key={`works-list-${index}`} {...project} />
      ))}
    </div>
  );
};
export default SectionWrapper(WorksList, 'works-list');
