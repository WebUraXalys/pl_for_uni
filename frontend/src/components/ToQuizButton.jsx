import { Link } from "react-router-dom";
import { MsalProvider, AuthenticatedTemplate, useMsal, UnauthenticatedTemplate } from '@azure/msal-react';

export const ToQuizButton = () => {
const { instance } = useMsal();
const activeAccount = instance.getActiveAccount();
let name = activeAccount.idTokenClaims["name"];
   return (
        <>
        <h4 className="btn_title">
            <span>{name}</span>. Ви успішно верифікувалися через OpenID. 
        </h4>
        <button className="button_quiz"><Link to="/quiz">Уточнити дані групи</Link></button>
        </>
    );
}