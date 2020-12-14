import React, { useState, useEffect } from 'react';
import './Training.css'
import firstImg from '../../images/08.jpg'
import secImg from '../../images/09.jpg'
import thidImg from '../../images/10.jpg'


export default function Training() {
    const [arrFix, setarrFix] = useState(3)
    const [active, setactive] = useState([
        { id: 1, img: firstImg, title1: 'Прямые эфиры', title2: 'ОСЕННИЕ ОБРАЗЫ', listik: ['Два образа были отрисованы в прямых эфирах. Рисуй и отмечай #учусь_у_mariasw'], button: 'Кнопка текс' },
        { id: 2, img: secImg, title1: 'Прямые эфиры', title2: 'ДЕТСКИЙ ПОРТРЕТ СТИКЕР', listik: ['Рисуй и отмечай #учусь_у_mariasw'], button: 'Кнопка текс' },])
    const [disable, setdisable] = useState([
        { id: 3, img: thidImg, title1: 'Прямые эфир с Мужской недели', title2: 'МУЖСКИЕ РУКИ С МЕДОМ', listik: ['Сохраненная часть эфира:', 'проработка теней на руках + свет, полная отрисовка меда'], button: 'Кнопка текс' }
    ])

    const left = () => {
        var arr = active
        const shifted = arr.shift()
        arr.push(disable[0])
        setactive([...arr])
        setdisable([{ ...shifted }])
    }

    const rigth = () => {
        var arr = active
        const shifted = arr.pop()
        arr.unshift(disable[0])
        setactive([...arr])
        setdisable([{ ...shifted }])
    }

    console.log('active', arrFix, active)

    return (
        <>
                <div className ='infoBlock__carouselBox__titl2'>
                    <strong>Бесплатные уроки</strong>
                </div>

            <div className="infoBlock__carouselBox2">
                <div className="infoBlock__carouselBox__but2" onClick={() => left()}>
                <div class="arrow left"></div>
                </div>
                {active.length > 0 && active.map((item, index) => {
                    return (
                        <div key={index} className={'infoBlock__carouselBox__block2'}>
                            <div className='infoBlock__carouselBox__block--img2'><img src={item.img} alt={'sad'} /></div>
                            <div className='infoBlock__carouselBox__block1__info2'>
                            <div className ='infoBlock__carouselBox__block1__tit2'>
                                <div>
                                <div className='infoBlock__carouselBox__block--title12'>{item.title1}</div>
                                </div>
                                <div>
                                <div className='infoBlock__carouselBox__block--title22'>{item.title2}</div>
                                 </div>
                                 </div>
                            <div>{item.listik.map((item, index) => {
                                return (
                                    <div className='infoBlock__carouselBox__block__lst2'>
                                        <span key={index}>{item}</span>
                                    </div>
                                )
                            

                            })}</div>
                            <div>
                                <div className='infoBlock__carouselBox__block2__but'>
                                    Подробнее
                                </div>
                            </div>
                            </div>

                        </div>
                    )
                })}
                <div className="infoBlock__carouselBox__but1" onClick={() => rigth()}>
                    <div class="arrow right"></div>
                </div>
            </div>
        </>

    )
}       
