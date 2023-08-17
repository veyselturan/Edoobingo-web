import { CssBaseline } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import { MatxTheme } from './components';
import { AuthProvider } from './contexts/JWTAuthContext';
import { SettingsProvider } from './contexts/SettingsContext';
import routes from './routes';
import '../fake-db';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const content = useRoutes(routes);

  return (
    <SettingsProvider>
      <AuthProvider>
        <MatxTheme>
          <CssBaseline />
          <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
          {content}
        </MatxTheme>
      </AuthProvider>
    </SettingsProvider>
  );
};

export default App;
