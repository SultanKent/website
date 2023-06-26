import React from 'react';
import './Games.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper";
import games_main from '../../assets/Game_main.png';
import games_main2 from '../../assets/Smart1.png';
import games_main3 from '../../assets/Family4.png';
import games1 from '../../assets/Games1.png'
import games2 from '../../assets/Games2.png'
import games3 from '../../assets/Games3.png'
import games4 from '../../assets/Games4.png'


const Games = () => {
  const Main_games = [
    { id: 1, title: 'Свинтус NEON', description: 'Весёлая и быстрая карточная игра для любой компании, для малого и большого количества игроков', img: games_main },
    { id: 2, title: 'MAFIA QUIZ', description: 'Весёлая и быстрая карточная игра для любой компании, для малого и большого количества игроков', img: games_main2 },
    { id: 3, title: 'Имаджинариум', description: 'Весёлая и быстрая карточная игра для любой компании, для малого и большого количества игроков', img: games_main3 },
    { id: 4, title: 'Свинтус NEON', description: 'Весёлая и быстрая карточная игра для любой компании, для малого и большого количества игроков', img: games_main },
  ];
  const games = [
    {id: 1, title: 'Свинтус NEON', description: 'Хрю-киберпанк наступил', img: games1},
    {id: 2, title: 'Mafia', description: 'Психологическая игра', img: games2},
    {id: 3, title: 'Имаджинариум', description: 'Карты и ассоциации', img: games3},
    {id: 4, title: 'Данетки', description: 'Игра в загадки', img: games4}
  ]
  return (
    <div className="Games">
      <div className="Games_main">
        <p>ВО ЧТО СЫГРАЕМ</p>
        <h1>Простые правила, быстрые и интересные партии и постоянно пополняющийся каталог</h1>
        </div>
        <div className="Games_main2">
          <Swiper
            scrollbar={{
              hide: true,
            }}
            modules={[Autoplay, Scrollbar]}
            className="mySwiper"
            autoplay={{ delay: 4000 }}
          >
            {Main_games.map((game) => (
              <SwiperSlide key={game.id} className='Slider'>
                <img src={game.img} className="slider-image"/>
                <div className='slider_text'>
                  <h2>{game.title}</h2>
                  <p>{game.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="Games_main3">
          {games.map((game) => (
            <div className="Games_titles" key={game.id}>
            <div>
            <h3>{game.title}</h3>
            <p>{game.description}</p>
            </div>
            <div><img src={game.img}/></div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Games;