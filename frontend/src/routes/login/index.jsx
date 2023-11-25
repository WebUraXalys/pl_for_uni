import { useState } from 'react'
import logo from '../../assets/logouniv.png'
import officeIcon from '../../assets/office.png'

function Login() {

  return (
    <>
    <div className="page">
      <div className="box">
         <div className="header">
            <img src={logo} alt="" className="header_img" />
            <h1 className="header_title"> Платформа оцінювання якості викладання </h1>
         </div>
         <div className="box_authorizatoin">
            <hr />
            <h4 className="btn_title">
               Авторизуватися за допомогою корпоративної пошти:
            </h4>
            <a href="" className="button_link_oidc">
               <img src={officeIcon} alt=""  className="btn_img"/>
               OpenID Connect
            </a>
            <hr />
         </div>
         <div className="description">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas dolore quidem assumenda corporis officiis, inventore rem quaerat maxime ullam non molestiae facere iste, libero voluptate, deleniti illum aperiam. Id, ipsa.</p>
         </div>

      </div>
      </div>
    </>
  )
}

export default Login
