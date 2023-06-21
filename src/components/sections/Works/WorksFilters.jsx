import { styled } from 'styled-components';

import { dataStore } from '../../../store/dataStore';
import { lowerCase, rem } from '../../../utils';

export default function WorksFilters({ filterKey, setFilterKey }) {
  const data = dataStore((state) => state.works);
  return (
    <FilterList>
      {data.filters.map((f, index) => (
        <WorksFiltersItem key={`filter-${index}`} {...f} filterKey={filterKey} setFilterKey={setFilterKey} />
      ))}
    </FilterList>
  );
}

function WorksFiltersItem({ title, filter, filterKey, setFilterKey }) {
  return (
    <FilterItem onClick={() => setFilterKey(lowerCase(filter))} active={`${lowerCase(filter) === lowerCase(filterKey)}`}>
      {title}
    </FilterItem>
  );
}

const FilterList = styled.div`
  position: relative;
  text-align: center;
  align-self: center;
`;

const FilterItem = styled.p`
  position: relative;
  margin-bottom: ${rem(20)};
  margin-right: ${rem(20)};
  margin-left: ${rem(20)};
  display: inline-block;
  vertical-align: top;
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  cursor: pointer;
  color: ${({ active }) => active === 'true' && 'var(--c-accent)'};

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: ${rem(-10)};
    width: ${({ active }) => (active === 'true' ? rem(40) : 0)};
    max-width: 60%;
    height: ${rem(2)};
    margin-top: ${rem(-2)};
    background: var(--c-accent);
    transition: all 0.3s cubic-bezier(0.3, 0, 0.3, 1);
  }

  &:hover:before {
    width: ${rem(40)};
  }
`;
