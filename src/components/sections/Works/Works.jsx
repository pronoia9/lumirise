import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

import { WorksFilters, WorksGrid, WorksList, WorksButton } from '../..';
import { SectionWrapper } from '../../../hoc';
import { lowerCase, setProjectsCount, rem } from '../../../utils';
import { dataStore } from '../../../store/dataStore';

const Works = ({ type = 'grid' }) => {
  const data = dataStore((state) => state.works);
  const [filterKey, setFilterKey] = useState('');
  const [projects, setProjects] = useState(data.projects);
  const [rows, setRows] = useState(2);
  const [count, setCount] = useState(setProjectsCount(rows));
  const topRef = useRef();

  // Checks whether or not all the projects are shown with the filter
  const showingAllProjects = () => !(projects.slice(0, count).length < projects.length);

  // Handle filtering projects when filter key changes OR when the count is changed due to resizing or row change
  useEffect(() => {
    setProjects(
      [!filterKey
        ? data.projects
        : data.projects.filter(
            (p) => lowerCase(p.categories.join('')).includes(filterKey) || lowerCase(p.tags.join('')).includes(filterKey)),
      ].flat()
    );
  }, [filterKey]);

  // Set count when rows change
  useEffect(() => { setCount(setProjectsCount(rows)); }, [rows]);

  // Sets count when the window is resized
  useEffect(() => {
    const resize = () => { setCount(setProjectsCount(2)); };
    window.addEventListener('resize', resize);
    return () => { window.removeEventListener('resize', resize);
    };
  }, []);

  const handleButtonClick = () => {
    if (!showingAllProjects()) setRows((prev) => prev + 1);
    else {
      setRows(2);
      setCount(rows);
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Container ref={topRef}>
      <WorksFilters filterKey={filterKey} setFilterKey={setFilterKey} />

      {type === 'grid' && <WorksGrid projects={projects} count={count} filterKey={filterKey} />}
      {type === 'list' && <WorksList projects={projects} count={count} filterKey={filterKey} />}

      <WorksButton showingAllProjects={showingAllProjects} handleButtonClick={handleButtonClick} />
    </Container>
  );
};
export default SectionWrapper(Works, 'works');

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${rem(40)};
`;
