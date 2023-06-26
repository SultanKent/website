import React from 'react'
import './Command.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Command1 from '../../assets/Command1.png'
import Command2 from '../../assets/Command2.png'
import arrow1 from '../../assets/slider_arrow1.png'
import arrow2 from '../../assets/slider_arrow2.png'

const Command = () => {
    const command = [
        {quote: Command2, text: 'Команда, опыт, любовь к прогрессу, экспертиза, а еще business-first подход: мы не «продаем решения», а создаем стратегию развития вместе с заказчиком, где важен результат, а не набор технологий.',
        name: 'Антон Кириленко', img: Command1,
        },
        {quote: Command2, text: 'Команда, опыт, любовь к прогрессу, экспертиза, а еще business-first подход: мы не «продаем решения», а создаем стратегию развития вместе с заказчиком, где важен результат, а не набор технологий.',
        name: 'Антон Кириленко', img: Command1,
        },
        {quote: Command2, text: 'Команда, опыт, любовь к прогрессу, экспертиза, а еще business-first подход: мы не «продаем решения», а создаем стратегию развития вместе с заказчиком, где важен результат, а не набор технологий.',
        name: 'Антон Кириленко', img: Command1,
        },
    ]
  return (
    <div className="Command">
        <Swiper
              navigation={{
                prevEl: '.sliderArrow1',
                nextEl: '.sliderArrow2'
              }}
              modules={[Navigation]}
              slidesPerView={1}
            >
        {command.map((item, index) => {
            return (
            <SwiperSlide className="Command_main" key={index}>
                <div className="Command_main2">

                <div>
                <img src={item.quote} style={{width: '32px', height: '32px'}}/>
                <h2 className="main_text">{item.text}</h2>
                </div>

                <div>
                    <h3 style={{whiteSpace: 'nowrap'}}>{item.name}</h3>
                    <img src={item.img} className="art"/>
                </div>

                </div>
                <div className="Command_main3">
                <img src={arrow1} className="sliderArrow1"/>
                <img src={arrow2} className="sliderArrow2"/>
                </div>
            </SwiperSlide>
            )
        })}
        </Swiper>
        </div>
  )
}

export default Command