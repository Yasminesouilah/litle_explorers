import AppRoutes from './routes/AppRoutes.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { ChildrenProvider } from './context/ChildrenContext.jsx';
import { RegistrationProvider } from './context/RegistrationContext.jsx';

function App() {
  return (
    <AuthProvider>
      <ChildrenProvider>
        <RegistrationProvider>
          <AppRoutes />
        </RegistrationProvider>
      </ChildrenProvider>
    </AuthProvider>
  );
}

export default App;
