import ChildSelector from '../children/ChildSelector.jsx';

function ChildSelection({ children, childId, onSelect }) {
  return <ChildSelector children={children} value={childId} onChange={onSelect} />;
}

export default ChildSelection;
