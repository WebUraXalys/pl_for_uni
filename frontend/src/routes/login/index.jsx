import { MsalProvider, AuthenticatedTemplate, useMsal, UnauthenticatedTemplate } from '@azure/msal-react';
import logo from '../../assets/logouniv.png'
import officeIcon from '../../assets/office.png'
import { loginRequest } from '../../authConfig';
import { ToQuizButton } from '../../components/ToQuizButton';

export function Login() {
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
    <div className="page">
      <div className="box">
         <div className="header">
            <img src={logo} alt="" className="header_img" />
            <h1 className="header_title"> Платформа оцінювання якості навчальних дисциплін</h1>
         </div>
         <div className="box_authorizatoin">
            <hr />
            
             <AuthenticatedTemplate>
                 {activeAccount ? (
                     <ToQuizButton idTokenClaims={activeAccount.idTokenClaims}/>
                     //   <IdTokenData idTokenClaims={activeAccount.idTokenClaims} />
                 ) : null}
             </AuthenticatedTemplate>
             <UnauthenticatedTemplate>
               <h4 className="btn_title">
                  Авторизуватися за допомогою корпоративної пошти:
               </h4>
               <a className="button_link_oidc signInButton"  onClick={handleRedirect} variant="primary">
                  <img src={officeIcon} alt=""  className="btn_img"/>
                  OpenID Connect
               </a>
             </UnauthenticatedTemplate>
            <hr />
         </div>
         <div className="description">
            <p>Тут ви можете чесно висловити свої думки та надати оцінки, щоб сприяти поліпшенню навчання.</p>
            <p>Важливо зауважити, що ваші відгуки є повністю анонімними, і ваша конфіденційність гарантована.</p>
            <p>Ваш внесок допоможе нам створити оптимальне навчальне середовище та враховати потреби усіх студентів.</p>  
            <p>Дякуємо за участь у вдосконаленні якості навчання у нашому університеті!</p> 
         </div>

      </div>
      </div>
   </>
  )
}

export default Login
