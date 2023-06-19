import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

import { Card, Grid } from '..';
import { SectionWrapper } from '../../hoc';
import { UnfilledButton } from '../../styles/ButtonStyles';
import { projectsData } from '../../utils/data';
import { cardMotion } from '../../utils/motion';
import { lowerCase, setProjectsCount, rem } from '../../utils/utils';

const FilterListItem = ({ title, filter, filterKey, setFilterKey }) => (
  <FilterItem onClick={() => setFilterKey(lowerCase(filter))} active={`${lowerCase(filter) === lowerCase(filterKey)}`}>
    {title}
  </FilterItem>
);

const Works = () => {
  const [filterKey, setFilterKey] = useState('');
  const [projects, setProjects] = useState(projectsData.projects);
  const [rows, setRows] = useState(2);
  const [count, setCount] = useState(setProjectsCount(rows));
  const topRef = useRef();

  // Handle filtering projects when filter key changes OR when the count is changed due to resizing or row change
  useEffect(() => {
    setProjects(
      [
        !filterKey
          ? projectsData.projects
          : projectsData.projects.filter(
              (p) => lowerCase(p.categories.join('')).includes(filterKey) || lowerCase(p.tags.join('')).includes(filterKey)
            ),
      ]
        .flat()
        .slice(0, count)
    );
  }, [filterKey, count]);

  // Set count when rows change
  useEffect(() => { setCount(setProjectsCount(rows)); }, [rows]);

  // Sets count when the window is resized
  useEffect(() => {
    const resize = () => { setCount(setProjectsCount(2)); };
    window.addEventListener('resize', resize);
    return () => { window.removeEventListener('resize', resize); };
  }, []);

  const handleButtonClick = () => {
    if (projects.length < projectsData.projects.length) setRows((prev) => prev + 1);
    else {
      setRows(2);
      setCount(rows);
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Container ref={topRef}>
      {/* FILTERS */}
      <FilterList className='filter-links'>
        {projectsData.filters.map((f, index) => (
          <FilterListItem key={`filter-${index}`} {...f} filterKey={filterKey} setFilterKey={setFilterKey} />
        ))}
      </FilterList>

      {/* WORKS */}
      <Grid className='filter-container' size='l' gap='40px'>
        {projects.map((project, index) => (
          <Card key={`projects-${filterKey}-${index}`} {...project} section='Works' motion={cardMotion}>
            <Image className='image'>
              <img src={project.image} />
            </Image>
          </Card>
        ))}
      </Grid>

      {/* BUTTON */}
      <UnfilledButton onClick={handleButtonClick}>
        <p> View {projects.length < projectsData.projects.length ? 'More' : 'Less'}</p>
      </UnfilledButton>
    </Container>
  );
};
export default SectionWrapper(Works, 'works');

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${rem('40px')};
`;

const FilterList = styled.div`
  position: relative;
  text-align: center;
  align-self: center;

  p {
    position: relative;
    margin-bottom: ${rem('20px')};
    margin-right: ${rem('20px')};
    margin-left: ${rem('20px')};
    display: inline-block;
    vertical-align: top;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      bottom: ${rem('-10px')};
      width: 0;
      max-width: 60%;
      height: ${rem('2px')};
      margin-top: ${rem('-2px')};
      background: var(--c-accent);
      transition: all 0.3s cubic-bezier(0.3, 0, 0.3, 1);
    }

    &:hover:before {
      width: ${rem('40px')};
    }
  }
`;

const FilterItem = styled.p`
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  cursor: pointer;
  color: ${({ active }) => active === 'true' && 'var(--c-accent)'};
`;

const Image = styled.div`
  width: 100%;
  height: ${rem('180px')};
  border-radius: ${rem('18px')};
  overflow: hidden;
  margin-bottom: ${rem('30px')};

  img {
    width: 100%;
    height: ${rem('180px')};
    border-radius: ${rem('18px')};
    object-fit: cover;
    transform: scale(1);
    transition: transform 0.6s cubic-bezier(0.3, 0, 0.3, 1);
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;
