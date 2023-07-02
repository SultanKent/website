import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import telegram from '../../assets/telegram.png'
import ok from '../../assets/ok.png'
import yt from '../../assets/youtube.png'
import vk from '../../assets/vk.png'
import Google_play from '../../assets/Footer.png'


const Footer = () => {
  const navbar = ['О компании', 'Вакансии', 'Для партнеров', 'Размещение рекламы']
  const imgs = [
    {
      imageSrc: telegram,
      link: 'https://t.me/sleepcc'
    },
    {
      imageSrc: ok,
      link: 'ссылка_на_ok'
    },
    {
      imageSrc: yt,
      link: 'ссылка_на_yt'
    },
    {
      imageSrc: vk,
      link: 'https://vk.com/sultangamer'
    }
  ];
  return (
    <div className="Footer">
      <div className="Footer_main">

        <div className='Footers'>
        <div className="Footer1">
        <img src={logo} className="logo" alt='logo'/>
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
        <button className='support'>Служба поддержки</button>
        <div className="navbar2_1">
        {imgs.map((item, index) => (
          <div key={index} className="messengers">
            <span>
            <a href={item.link} target="_blank">
              <img src={item.imageSrc} alt={`Messenger ${index}`}/>
            </a>
            </span>
          </div>
        ))}
        <img src={Google_play} className="Google" alt='google'/>
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