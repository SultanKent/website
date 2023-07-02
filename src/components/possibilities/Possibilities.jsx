import React from 'react'
import './Possibilities.css'
import Icon1 from '../../assets/P_icon1.png'
import Icon2 from '../../assets/P_icon3.png'
import Icon3 from '../../assets/P_icon2.png'
import Possibilities1 from '../../assets/Possibilities1.png'
import Possibilities2 from '../../assets/Possibilities2.png'
import Possibilities3 from '../../assets/Possibilities3.png'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';


const Possibilities = () => {
    const possibilities = [
        {number: '01', title: 'Можно играть на <span class="title_words">Smart-tv</span> или <span class="title_words">PC</span>',
        description: 'Собери друзей перед экраном ТВ и можно начинать вечеринку!',
        icon: Icon1, img: Possibilities1},
        {number: '02', title: 'Мобильный телефон в качестве <span class="title_words">контроллера</span>',
        description: 'с их помощью можно выбирать правильные ответы, управлять событиями на большом экране',
        icon: Icon2, img: Possibilities2},
        {number: '03', title: '<span class="title_words">Новые</span> игры каждую пятницу',
        description: 'Простые правила, быстрые и интересные партии',
        icon: Icon3, img: Possibilities3}
    ]
  return (
    <Swiper
    breakpoints={{
        1440: {
            slidesPerView: 3
        },
        900: {
            slidesPerView: 3
        }
    }}
    slidesPerView={1}
    spaceBetween={10}
    pagination
    className="Possibilities">
        {possibilities.map((item, index) => (
        <SwiperSlide className="Possibilities_main" key={index}>
            
            <div className="Possibilities_main2">
                <div className="Possibilities1">
                    <p>Возможности платформы</p>
                    <h1>{item.number}</h1>
                    <div className='Possibilities_words'>
                    <h2 dangerouslySetInnerHTML={{ __html: item.title }}></h2>
                    <p>{item.description}</p>
                    <button className='btn'>Начать играть</button>
                    </div>
                </div>
                <div className="Possibilities2">
                    <img src={item.icon} className={index === 0 || index === 1 ? 'icon1' : 'icon2'}
                    alt="icon"/>
                    <img src={item.img} alt="item.img"/>
                </div>
                
            </div>

        </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default Possibilities