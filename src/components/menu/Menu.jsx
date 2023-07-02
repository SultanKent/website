import React from 'react'
import './Menu.css'
import Logo from '../../assets/logo.png'

const Menu = () => {
  return (
    <div className="Menu">
        <div className="Menu_main">
        <ul>
            <li>о компании</li>
            <li>вакансии</li>
        </ul>   
        <img src={Logo} alt="Logo"/>
        <button className='btn menu-btn'>Начать играть</button>
    </div>
    </div>
  )
}

export default Menu