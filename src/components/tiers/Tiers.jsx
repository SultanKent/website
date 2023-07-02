import React from 'react'
import './Tiers.css'
import Tiers1 from '../../assets/Tiers1.png'
import Tiers2 from '../../assets/Tiers2.png'

const Tiers = () => {
  const Tiers = [
    {img: Tiers1, title: 'Бесплатно', description: 'Базовая версия с ограниченным доступом'},
    {img: Tiers2, title: '399 руб/месяц', description: 'Премиум версия с полным доступом'}
  ]
  return (
    <div className="Tiers">
        <div className="Tiers_main">
            <p>Играйте бесплатно, купите потом</p>
            <div className="Tiers_main2">
            {Tiers.map((tier, index) => (
                <div key={index} className={`Tier0 ${index === 0 ? 'Tier1' : 'Tier2'}`}>
                  <img src={tier.img} alt="tier.img"/>
                  <h2>{tier.title}</h2>
                  <p>{tier.description}</p>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Tiers;