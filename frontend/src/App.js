import { MsalProvider, AuthenticatedTemplate, useMsal, UnauthenticatedTemplate } from '@azure/msal-react'; import { Container, Button } from 'react-bootstrap';
import { loginRequest } from './authConfig';

import './styles/App.css';
import './styles/index.css';
import {Login} from './routes/login/index';

 const MainContent = () => {
    const { instance } = useMsal();
    const activeAccount = instance.getActiveAccount();
    const handleRedirect = () => {
        instance
            .loginRedirect({
                ...loginRequest,
                prompt: 'create',
             })
            .catch((error) => console.log(error));
    };
    return (
        <>
            <Login></Login>
        </>
    );
};

const App = ({ instance }) => {
    return (
        <MsalProvider instance={instance}>
            <MainContent />
        </MsalProvider>
    );
 };

 export default App;