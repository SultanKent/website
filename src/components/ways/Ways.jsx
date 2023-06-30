import React from 'react'
import './Ways.css'
import Ways1 from '../../assets/Ways1.png'
import Ways2 from '../../assets/Ways2.png'
import Ways3 from '../../assets/Ways3.png'
import Ways4 from '../../assets/Ways4.png'
import Ways5 from '../../assets/Ways5.png'
import Ways6 from '../../assets/Ways6.png'
import android from '../../assets/android.png'
import space1 from '../../assets/space1.png'
import space2 from '../../assets/space2.png'
import ways_blur from '../../assets/ways_blur.png'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import Google from '../../assets/Google.png'
import Android from '../../assets/Android2.png'

const Ways = () => {
  const ways = [
    {p: 'Собери друзей перед экраном ТВ и можно начинать вечеринку!', h1: '01', img: Ways1},
    {p: 'Подключайте смартфоны к телевизору одним нажатием', h1: '02', img: Ways2},
    {p: 'Смартфоны в руках возьмут — игровые контроллеры', h1: '03', img: Ways3},
    {p2: 'Так же доступно на AndroidTV', h1: 'Начать играть', img0: android,  img: Ways4}
  ]
  return (
    <div className="Ways">
      <div className="Ways_main">
        <p>Играйте вместе</p>
        <div className="Ways_main2">
            <h1>Partystation — новый способ развлечений для любой компании</h1>
            <div className="Ways_spans">
              <img src={space1}/>
              <img src={space2}/>
              <img src={ways_blur}/>
              <Swiper
               breakpoints={{
                960: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 2,
                },
                580: {
                  slidesPerView: 2,
                },
                360: {
                  slidesPerView: 1,
                }
                }}
                slidesPerView={4}
                pagination
                className='Swiper'
              >
              {ways.map((way, index) => (
                <SwiperSlide id='spans' key={index} className="spans">
                <span className={index === 0 ? 'span_way1' : (index === 1 ? 'span_way2' : (index === 2 ? 'span_way3' : 'span_way4'))}>
                  <p>{way.p}</p>
                  <h1>{way.h1}</h1>
                </span>
                <img src={way.img} className={index === 0 ? 'way1' : (index === 1 ? 'way2' : (index === 2 ? 'way3' : 'way4'))}/>
                <div className='last_words'>
                <img src={way.img0}/>
                <p style={{width: '132px', height: '48px'}}>{way.p2}</p>
                </div>
                </SwiperSlide>
              ))}
              <img src={Ways5} className="way5"/>
              <img src={Ways6} className="way6"/>
              </Swiper>
              <div className="ways_last">
                <h2>Где хотите начать играть?</h2>
                <div className="ways_last2">
                  <span> 
                  <div>
                  <img src={Google}/><p>PC</p>
                  </div>
                  </span>
                  <h3>ИЛИ</h3>
                  <span><div>
                  <img src={Android}/><p>Android TV</p>
                  </div></span>
                </div>
              </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Ways