import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import { styled } from 'styled-components';

import { Card } from '..';
import { SectionWrapper } from '../../hoc';
import { UnfilledButton } from '../../styles/ButtonStyles';
import { projectsData } from '../../utils/data';

const FilterListItem = ({ title, filter, setFilterKeys }) => (
  <FilterItem onClick={() => setFilterKeys('react')}>
    {title}
  </FilterItem>
);

const Works = () => {
  const isotope = useRef(Isotope);
  const [filterKey, setFilterKey] = useState('');

  // Initialize an Isotope object with configs
  useLayoutEffect(() => {
    isotope.current = new Isotope('.filter-container', { itemSelector: '.filter-item', layoutMode: 'fitRows' });
    return () => isotope.current?.destroy();
  }, []);

  // Handle filter key change
  const handleFilterKeyChange = (key) => { setFilterKey(key); };
  useEffect(() => {
    isotope.current && filterKey === ''
      ? isotope.current?.arrange({ filter: '*' })
      : isotope.current?.arrange({ filter: `.${`${filterKey}`.toLowerCase()}` });
  }, [filterKey]);

  return (
    <Container>
      {/* FILTERS */}
      <FilterList className='filter-links'>
        {projectsData.filters.map((f, index) => (
          <FilterListItem key={`filter-${index}`} {...f} setFilterKeys={setFilterKey} />
        ))}
      </FilterList>

      {/* WORKS */}
      <Wrapper className='filter-container'>
        {projectsData.projects.slice(0, 6).map((project, index) => (
          <Card key={`project-${index}`} {...project} descheight={300} section='Works'>
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
  margin-top: -40px;
  margin-left: 0;
  margin-right: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > div {
    width: calc(33.333% - 40px);
    min-height: 725px;
    /* flex: 0 0 33.333%; */
    margin: 0 20px 40px 20px;
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
