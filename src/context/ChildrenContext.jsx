import { createContext, useMemo, useState } from 'react';
import { readStorage, writeStorage } from '../utils/storage.js';

export const ChildrenContext = createContext(null);

export function ChildrenProvider({ children }) {
  const [childrenList, setChildrenList] = useState(() => readStorage('children', []));

  const value = useMemo(() => ({
    children: childrenList,
    addChild(child) {
      const nextChildren = [...childrenList, { ...child, id: crypto.randomUUID() }];
      setChildrenList(nextChildren);
      writeStorage('children', nextChildren);
    },
    updateChild(id, updates) {
      const nextChildren = childrenList.map((child) => child.id === id ? { ...child, ...updates } : child);
      setChildrenList(nextChildren);
      writeStorage('children', nextChildren);
    },
    removeChild(id) {
      const nextChildren = childrenList.filter((child) => child.id !== id);
      setChildrenList(nextChildren);
      writeStorage('children', nextChildren);
    },
  }), [childrenList]);

  return <ChildrenContext.Provider value={value}>{children}</ChildrenContext.Provider>;
}
