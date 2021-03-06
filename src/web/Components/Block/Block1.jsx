import React, { useState, useEffect } from 'react';
import './infoblock.css'
import firstImg from '../../../images/3.jpg'
import secImg from '../../../images/4.jpg'
import thidImg from '../../../images/5.jpg'

export default function Block() {
    const [arrFix, setarrFix] = useState(3)
    const [active, setactive] = useState([
    { id: 1, img: firstImg, title1: 'Доступен курс БлаБла', title2: 'Детский портрет с нуля', listik: ['50 уроков', 'Основы рисунка', 'анатомия'], button: 'Кнопка текс' },
    { id: 2, img: secImg, title1: 'Доступен курс', title2: 'портрет с нуля', listik: ['50 уроков', 'Основы рисунка', 'Детская анатомия'], button: 'Кнопка текс' },])
    const [disable, setdisable] = useState([
        { id: 3, img: thidImg, title1: 'курс БлаБла', title2: 'Детский портрет', listik: ['50 уроков', 'Основы рисунка', 'Детская анатомия'], button: 'Кнопка текс' }
    ])

    const left = () => {
     var arr=  active
      const shifted = arr.shift()
      arr.push(disable[0])
      setactive([...arr])
      setdisable([{...shifted}])
    }

    const rigth = () => {
    var arr=  active
    const shifted = arr.pop()
      arr.unshift(disable[0])
      setactive([...arr])
      setdisable([{...shifted}])
    }
   
console.log('active' ,arrFix ,active)

    return (
        <>

            <div className='infoblock'>
                <div>
                    <p>Онлайн обучение на iPad с художницей Maria Sw</p>
                    <p>Интенсивные курсы для новичков и умелых художников!</p>
                </div>
            </div>
            <div className="infoBlock__carouselBox">
                <div className="infoBlock__carouselBox__but" onClick={()=>left()}>
                    Влево
                  </div>
                {active.length > 0 && active.map((item, index) => {
                    return (
                        <div key={index} className={'infoBlock__carouselBox__block'}>
                            <div className='infoBlock__carouselBox__block--img'><img src={item.img} alt={'sad'} /></div>
                            <div className='infoBlock__carouselBox__block--title1'>{item.title1}</div>
                            <div className='infoBlock__carouselBox__block--title2'>{item.title2}</div>
                            <div>{item.listik.map((item, index) => {
                                return (
                                    <span key={index}>{item}</span>
                                )
                            })}</div>
                        </div>
                    )
                })}
                <div className="infoBlock__carouselBox__but" onClick={() => rigth()}>
                    Вправо
                </div>
            </div>
        </>
    )
}       
