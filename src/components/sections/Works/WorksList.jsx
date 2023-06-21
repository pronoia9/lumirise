import WorksListItem from "./WorksListItem";

export default function WorksList({ projects, count, filterKey }) {
  return (
    <div>
      {projects.slice(0, count).map((project, index) => (
        <WorksListItem key={`works-list-${filterKey}-${index}`} filterKey={filterKey} project={project} index={index} />
      ))}
    </div>
  );
}
