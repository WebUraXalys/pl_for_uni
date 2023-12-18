import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Quiz from './routes/quiz/index'
import Assessment from './routes/assessment/index'
import { PublicClientApplication, EventType } from '@azure/msal-browser';
import { msalConfig } from './authConfig';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import './styles/App.css';
import './styles/index.css';

const msalInstance = new PublicClientApplication(msalConfig);
// Default to using the first account if no account is active on page load
if (!msalInstance.getActiveAccount() && msalInstance.getAllAccounts().length > 0) {
    // Account selection logic is app dependent. Adjust as needed for different use cases.
    msalInstance.setActiveAccount(msalInstance.getActiveAccount()[0]);
}

// Listen for sign-in event and set active account
msalInstance.addEventCallback((event) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
        const account = event.payload.account;
        msalInstance.setActiveAccount(account);
    }
});
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route
      element={<App instance={msalInstance}/>}
      path="/"
    />
    <Route
        element={<Quiz instance={msalInstance}/>}
        path="/quiz"
    />
    <Route
        element={<Assessment instance={msalInstance}/>}
        path="/assessment"
    />
</>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

