import { UnfilledButton } from '../../../styles';

export default function WorksButton({ showingAllProjects, handleButtonClick }) {
  return (
    <UnfilledButton onClick={handleButtonClick}>
      <p> View {!showingAllProjects() ? 'More' : 'Less'}</p>
    </UnfilledButton>
  );
}
