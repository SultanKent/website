import React, { useState } from 'react';
import './Questions.css';
import icon from '../../assets/Questions.png';

const Questions = () => {
    const questions = [
        { text: 'Что такое PartyStation?', img: icon, answer: 'Partystation - это как ваш любимый онлайн-кинотеатр, но с играми. Это платформа, на которой представлены игры от лучших гейм-дизайнеров. Игроки собираются перед одним экраном и используют мобильные телефоны в качестве контроллеров.'},
        { text: 'Какие игры есть в PartyStation?', img: icon, answer: 'Partystation - это как ваш любимый онлайн-кинотеатр, но с играми. Это платформа, на которой представлены игры от лучших гейм-дизайнеров. Игроки собираются перед одним экраном и используют мобильные телефоны в качестве контроллеров.' },
        { text: 'Как играть в PartyStation?', img: icon, answer: 'Partystation - это как ваш любимый онлайн-кинотеатр, но с играми. Это платформа, на которой представлены игры от лучших гейм-дизайнеров. Игроки собираются перед одним экраном и используют мобильные телефоны в качестве контроллеров.' },
        { text: 'Какие устройства поддерживаются в PatyStation?', img: icon, answer: 'Partystation - это как ваш любимый онлайн-кинотеатр, но с играми. Это платформа, на которой представлены игры от лучших гейм-дизайнеров. Игроки собираются перед одним экраном и используют мобильные телефоны в качестве контроллеров.' },
        { text: 'Сколько это стоит?', img: icon, answer: 'Partystation - это как ваш любимый онлайн-кинотеатр, но с играми. Это платформа, на которой представлены игры от лучших гейм-дизайнеров. Игроки собираются перед одним экраном и используют мобильные телефоны в качестве контроллеров.' }
    ];
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

    const handleQuestionClick = (index) => {
        setSelectedQuestionIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="Questions">
            <p>FAQ</p>
            <div className="Questions_main">
                {questions.map((item, index) => (
                    <div className="Questions_main2" key={index}>
                        <div className="Questions1">
                            <div className="Question">
                                <h3>{item.text}</h3>
                            </div>
                            <div className="Open_question" onClick={() => handleQuestionClick(index)}>
                                <img src={item.img} alt="Open question" />
                            </div>
                        </div>

                        {selectedQuestionIndex === index && <div className='Answers1'>
                             <p>{item.answer}</p>
                             <p className='Answer2'>1. Откройте сайт в браузере на компьютере или смарт-тв (или запустите приложение на приставке).</p>
                             <p className='Answer2'>2. Нажмите «Начать играть», отсканируйте камерой мобильного телефона QR-код с экрана (или введите код в поле ввода)</p>
                             <p className='Answer2'>3. Введите свое имя.</p>
                             <p className='Answer2'>4. Все остальные игроки тоже сканируют QR-код и подключаются к игре</p>
                             <p className='Answer2'>5. Жмите «Играть», выбирайте игру и развлекайтесь</p>
                        </div>}

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Questions;