import React, { useEffect, useState } from 'react';
import './Header.css';
import Menu from '../menu/Menu';
import Header_main from '../../assets/header_main.png';
import Ghost1 from '../../assets/Ghost1.png';
import Ghost2 from '../../assets/Ghost2.png';
import Arrow from '../../assets/Arrow.png';
import Header_img1 from '../../assets/Header_img1.png';
import Header_img2 from '../../assets/Header_img2.png';
import Header_img3 from '../../assets/Header_img3.png';
import Header_img4 from '../../assets/Header_img4.png';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';

const Header = () => {

  const images = [
    { src: Header_img1, title: 'Свинтус NEON', description: 'Весёлая и быстрая карточная игра для любой компании' },
    { src: Header_img2, title: 'Квиз Логика', description: 'Настольное развлечение для детей и взрослых' },
    { src: Header_img3, title: 'Правда или действие', description: 'Всё будет основано только на вашей жизни и фактах из неё' },
    { src: Header_img4, title: 'Имаджинариум', description: 'Вам понадобится вся ваша фантазия и эмпатия' },
  ];
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    if (!email || !email.includes("@")) {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <div className="Header">
      <Menu />
      <div className="Header_main">
        <div className="Header_main1">
          <h1><span>Лучшие</span> игры <br />со всего мира</h1>
          <p>Каждую пятницу новая порция.<br /> Подписка за 399 ₽ в месяц</p>
        </div>

        <div className="Header_main2">
          <img src={Header_main} alt="Header Main" />
        </div>

        <img src={Ghost1} className="Ghost1" alt="Ghost 1" />
        <img src={Ghost2} className='Ghost2' alt="Ghost 2" />

        <div className="Header_main3">
          <div className="Header_main3_1">
            <input type='email' placeholder='Введите email чтобы войти в аккаунт или создать новый'
            onChange={handleInputChange} className={error ? "error" : "main_input"}
            />
            <span onClick={handleSubmit}><img src={Arrow} alt="Arrow" /></span>
            {error && <div className="error-message">Ошибка в тексте</div>}
          </div>

         
            <div className="Header_main3_2">
              <Swiper
               breakpoints={{
                860: {
                  slidesPerView: 4,
                  spaceBetween: 8
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 6
                },
                521: {
                  slidesPerView: 2,
                  spaceBetween: 6
                },
                420: {
                  slidesPerView: 1,
                  spaceBetween: 6
                },
                320: {
                  slidesPerView: 1,
                  spaceBetween: 6
                },
              }}
                slidesPerView={4}
                spaceBetween={10}
                pagination
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div>
                      <img src={image.src} alt={`Image ${index + 1}`} style={{ marginBottom: '24px' }} />
                      <h4 style={{ marginBottom: '8px' }}>{image.title}</h4>
                      <p>{image.description}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Header;