import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { Card } from '..';
import { SectionWrapper } from '../../hoc';
import { UnfilledButton } from '../../styles/ButtonStyles';
import { projectsData } from '../../utils/data';
import { lowerCase } from '../../utils/utils';

const FilterListItem = ({ title, filter, filterKey, setFilterKey }) => (
  <FilterItem onClick={() => setFilterKey(lowerCase(filter))} active={`${lowerCase(filter) === lowerCase(filterKey)}`}>
    {title}
  </FilterItem>
);

const Works = () => {
  const [filterKey, setFilterKey] = useState('');
  const [projects, setProjects] = useState(projectsData.projects);

  // Handle filtering projects when filter key changes
  useEffect(() => {
    setProjects(
      !filterKey
        ? projectsData.projects
        : projectsData.projects.filter(
            (p) => lowerCase(p.categories.join('')).includes(filterKey) || lowerCase(p.tags.join('')).includes(filterKey)
          )
    );
  }, [filterKey]);

  return (
    <Container>
      {/* FILTERS */}
      <FilterList className='filter-links'>
        {projectsData.filters.map((f, index) => (
          <FilterListItem key={`filter-${index}`} {...f} filterKey={filterKey} setFilterKey={setFilterKey} />
        ))}
      </FilterList>

      {/* WORKS */}
      <Wrapper className='filter-container'>
        {projects.slice(0, 6).map((project, index) => (
          <Card
            key={`projects-${filterKey}-${index}`}
            {...project}
            descheight={285}
            section='Works'
            motion={{
              initial: { opacity: 0, scale: 0.85 },
              animate: { opacity: 1, scale: 1, transition: { duration: 0.1, ease: 'easeIn' } },
            }}
          >
            <Image className='image'>
              <img src={project.image} />
            </Image>
          </Card>
        ))}
      </Wrapper>

      {/* BUTTON */}
      <UnfilledButton>
        <p> View More</p>
      </UnfilledButton>
    </Container>
  );
};
export default SectionWrapper(Works, 'works');

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const FilterList = styled.div`
  position: relative;
  margin: 0 0 30px 0;
  text-align: center;
  align-self: center;

  p {
    position: relative;
    margin-bottom: 20px;
    margin-right: 20px;
    margin-left: 20px;
    display: inline-block;
    vertical-align: top;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 0;
      max-width: 60%;
      height: 2px;
      margin-top: -2px;
      background: var(--c-accent);
      transition: all 0.3s cubic-bezier(0.3, 0, 0.3, 1);
    }

    &:hover:before {
      width: 40px;
    }
  }
`;

const FilterItem = styled.p`
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
`;

const Image = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 18px;
  overflow: hidden;
  margin-bottom: 30px;

  img {
    width: 100%;
    height: 180px;
    border-radius: 18px;
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
