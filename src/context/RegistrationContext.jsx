import { createContext, useMemo, useState } from 'react';

export const RegistrationContext = createContext(null);

export function RegistrationProvider({ children }) {
  const [registration, setRegistration] = useState(null);

  const value = useMemo(() => ({
    registration,
    begin(activity) {
      setRegistration({ activity, childId: null, sessionId: null, status: 'draft' });
    },
    update(updates) {
      setRegistration((current) => current ? { ...current, ...updates } : current);
    },
    clear() {
      setRegistration(null);
    },
  }), [registration]);

  return <RegistrationContext.Provider value={value}>{children}</RegistrationContext.Provider>;
}
