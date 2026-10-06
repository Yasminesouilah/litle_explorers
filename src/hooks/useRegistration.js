import { useContext } from 'react';
import { RegistrationContext } from '../context/RegistrationContext.jsx';

function useRegistration() {
  const context = useContext(RegistrationContext);
  if (!context) throw new Error('useRegistration must be used inside RegistrationProvider.');
  return context;
}

export default useRegistration;
