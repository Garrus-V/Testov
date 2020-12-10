import React from 'react';
import logo from '../../images/12.jpg'
import './Header.css';


export default function Header(props) {

  return (
    <div className='head__cont'>

      <div className='head__cont__text'>
        <p>Рисуй и обучайся с Maria Sw</p>
      </div>

      <div className='head__cont__img'>
        <img src={logo} alt='logotip' />
      </div>

      <div className='head__cont__buuton'>
        <div className='head__cont__buuton__but'>
        
          <button className='button'>Хочу на курс</button>
            
          <button className='button'>Бесплатные уроки</button>
          
          <button className='button'>Набор художника</button>
        
        </div>
       
        <div className='head__cont__buuton__buut'>
          <button className='button'>Набор кистей</button>
        </div>

      </div>
    </div>
  );
}