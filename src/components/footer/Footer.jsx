import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import telegram from '../../assets/telegram.png'
import ok from '../../assets/ok.png'
import yt from '../../assets/youtube.png'
import vk from '../../assets/vk.png'
import support from '../../assets/support.png'
import Google_play from '../../assets/Footer.png'


const Footer = () => {
  const navbar = ['О компании', 'Вакансии', 'Для партнеров', 'Размещение рекламы']
  const imgs = [telegram, ok, yt, vk]
  return (
    <div className="Footer">
      <div className="Footer_main">

        <div className='Footers'>
        <div className="Footer1">
        <img src={logo} className="logo"/>
        </div>

        <div className="Footer2">
        <ul className='navbar'>
        {navbar.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        </div>
 
        </div>

        <div className="Footer3">
          <h4>info@pstv.ru</h4>
          <div>
          <p>+7 (499) 685-00-43</p>
          <p>к322А, Центральный пр., Зеленоград, Москва,</p>
          </div>
        </div>

      </div>

      <div className='navbar2'>
        <img src={support}/>
        <div className="navbar2_1">
        {imgs.map((item, index) => (
          <div key={index} className="messengers">
            <span>
              <img src={item}/>
            </span>
          </div>
        ))}
        <img src={Google_play}/>
        </div>
        </div>
        
        <div className='users'>
          <p style={{opacity: 0.4000000059604645}}>ООО «Студия Валерия Комягина»</p>
          <div className="users2">
          <p style={{opacity: 0.4000000059604645}}>Пользовательское соглашение</p>
          <p style={{opacity: 0.4000000059604645}}>Политика конфиденциальности</p>
          </div>
        </div>

    </div>
  )
}

export default Footer