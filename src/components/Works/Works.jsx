import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { Card } from '..';
import { UnfilledButton } from '../../styles/ButtonStyles';
import { projectsData } from '../../utils/data';
import { cardMotion } from '../../utils/motion';
import { lowerCase } from '../../utils/utils';
import { SectionWrapper } from '../../hoc';

const FilterListItem = ({ title, filter, filterKey, setFilterKey }) => (
  <FilterItem onClick={() => setFilterKey(lowerCase(filter))} active={`${lowerCase(filter) === lowerCase(filterKey)}`}>
    {title}
  </FilterItem>
);

const Works = () => {
  const [filterKey, setFilterKey] = useState('');
  const [projects, setProjects] = useState(projectsData.projects);
  const [rows, setRows] = useState(); // TODO: USE THIS TO SLICE THE ARRAY FOR #ROWS

  // Handle filtering projects when filter key changes
  useEffect(() => {
    setProjects(
      !filterKey
        ? projectsData.projects.slice(0, 6)
        : projectsData.projects
            .filter((p) => lowerCase(p.categories.join('')).includes(filterKey) || lowerCase(p.tags.join('')).includes(filterKey))
            .slice(0, 6)
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
        {projects.map((project, index) => (
          <Card key={`projects-${filterKey}-${index}`} {...project} descheight={285} section='Works' motion={cardMotion}>
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
  width: 100%;
  /* padding: 0 40px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  /* 
  @media (max-width: 950px) {
    padding: 0 75px;
  }

  @media (max-width: 767px) {
    padding: 0 200px;
  } */
`;

const FilterList = styled.div`
  position: relative;
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
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  > div {
    flex: calc(33.333% - 40px);
  }

  @media (max-width: 1025px) {
    > div {
      flex: 50%;
    }
  }

  @media (max-width: 767px) {
    > div {
      flex: 100%;
    }
  }
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
