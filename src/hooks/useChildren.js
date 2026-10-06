import { useContext } from 'react';
import { ChildrenContext } from '../context/ChildrenContext.jsx';

function useChildren() {
  const context = useContext(ChildrenContext);
  if (!context) throw new Error('useChildren must be used inside ChildrenProvider.');
  return context;
}

export default useChildren;
