import { MsalProvider, AuthenticatedTemplate, useMsal, UnauthenticatedTemplate } from '@azure/msal-react';
import { useState } from 'react'
import axios from 'axios';
import logo from '../../assets/logouniv.png'
import { useNavigate } from 'react-router-dom';
import { MarkComp } from '../../components/MarkComp';



export function Quiz({instance}) {
 const handleSliderChange = (newValue) => {
    const formattedValue = `${newValue}°C`;
    
    // Використовуємо Axios для відправки значення на бекенд
    axios.post('/your-backend-endpoint', { value: formattedValue })
      .then(response => {
        // Обробка відповіді
      })
      .catch(error => {
        // Обробка помилки
      });
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
				<h1 className="discipline">Дисципліна: Програмування</h1>
				<h4 className="teacher">Викладач: Злобін Г.Г.</h4>
            <div className="question_box">
					<h3 className="title">
						Оцініть якість викладання:
					</h3>
            	<div className="slider_box">
         			<MarkComp onValueChange={handleSliderChange}/>
              	</div>
         	</div>
				<div className="question_box">
					<h3 className="title">
						Оцініть методичне забезпечення:
					</h3>
            	<div className="slider_box">
         			<MarkComp onValueChange={handleSliderChange}/>
              	</div>
         	</div>
				<div className="question_box">
					<h3 className="title">
						Оцініть об’єктивність оцінювання:
					</h3>
            	<div className="slider_box">
         			<MarkComp onValueChange={handleSliderChange}/>
              	</div>
         	</div>
            
              <button className="button" type="submit">Надіслати</button>
              
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

export default Quiz
