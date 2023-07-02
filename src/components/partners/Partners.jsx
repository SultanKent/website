import React from 'react'
import './Partners.css'
import Partner1 from '../../assets/Partners1.png'
import Partner2 from '../../assets/Partners2.png'
import Partner3 from '../../assets/Partners3.png'
import Partner4 from '../../assets/Partners4.png'
import Partner5 from '../../assets/Partners5.png'
import Partner6 from '../../assets/Partners6.png'


const Partners = () => {
    const partners = [Partner1, Partner2, Partner3, Partner4, Partner5, Partner6]
  return (
    <div className="Partners">
        <p>Наши партнеры</p>
        <div className="Partners_main">
            {partners.map((item, index) => (
                <div key={index} className="partner">
                <img src={item} alt="partners.item"/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Partners;