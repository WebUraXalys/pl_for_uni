import { MsalProvider, AuthenticatedTemplate, useMsal, UnauthenticatedTemplate } from '@azure/msal-react';
import { useState } from 'react'
import axios from 'axios';
import logo from '../../assets/logouniv.png'
import { useNavigate } from 'react-router-dom';



export function Quiz({instance}) {
//const { instance } = useMsal();
console.log(instance);
const activeAccount = instance.getActiveAccount();
console.log(activeAccount);

const navigate = useNavigate();
const [selectValueSpeciality, setSelectValueSpeciality] = useState('');
const [selectValueCourse, setSelectValueCourse] = useState('');


let oid = activeAccount.idTokenClaims["oid"];
let name = activeAccount.idTokenClaims["name"];
let preferred_username = activeAccount.idTokenClaims["preferred_username"];


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectValueSpeciality || !selectValueCourse) {
      alert("Будь ласка виберіть знаення");
      return;
    }

    try {
// <<<<<<< HEAD
//       const response = await axios.post('http://127.0.0.1:5000/users/create', {
//         selectValueSpeciality,
//         selectValueCourse,
//         oid,
//         name,
//         preferred_username
// =======
      const response = await axios.post('http://127.0.0.1:8000/bkd/users/create/', {
        "oid": oid,
        "name": name,
        "preferred_username": preferred_username,
        "speciality": selectValueSpeciality,
        "course": selectValueCourse
      });

      console.log('Response:', response.data);
      navigate('/assessment');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <>
    <div className="page">
      <div className="box">
         <div className="header">
            <img src={logo} alt="" className="header_img" />
            <h1 className="header_title">Платформа оцінювання якості навчальних дисциплін</h1>
         </div>
         <div className="box_authorizatoin">
            <hr />
              <form onSubmit={handleSubmit}>
                <div className="box_select_course">
                  <label>
                    Виберіть спеціальність:
                    <select value={selectValueSpeciality} onChange={e => setSelectValueSpeciality(e.target.value)}>
                      <option value="">Група</option>
                      <option value="FeS">ФеС</option>
                      <option value="FeL">ФеЛ</option>
                      <option value="FeI">ФеІ</option>
                      <option value="FeP">ФеП</option>
                      <option value="FeM">ФеМ</option>
                    </select>
                  </label>
                </div>
                <div className="box_select_course">
                  <label>
                    Виберіть курс:
                    <select value={selectValueCourse} onChange={e => setSelectValueCourse(e.target.value)}>
                      <option value="">Курс</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </label>
                </div>
                <button className="button_quiz" type="submit">Надіслати</button>
              </form>
            
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
