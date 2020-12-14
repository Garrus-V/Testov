import React, { useState, useEffect } from 'react';
import './mTraining.css'
import firstImg from '../../images/01.jpg'
import secImg from '../../images/03.jpg'
import thidImg from '../../images/1.jpg'


export default function Block() {
    const [arrFix, setarrFix] = useState(3)
    const [active, setactive] = useState([
        { id: 1, img: firstImg, title1: 'Доступен тариф : Я все знаю!', title2: 'Детский портрет с нуля', listik: ['50 видеоуроков', 'Основы рисунка', 'Детская анатомия', 'Авторская техника', 'Полноценное обучение для новичков', 'Пакет для проф. художников'], button: 'Кнопка текс' },
        { id: 2, img: secImg, title1: 'Запись открыта', title2: 'Рисуем как MARIA SW', listik: ['Это интенсивное обучение перевернет твои творческие навыки', 'Изучение авторской техники', 'Обучение подойдет художникам,которые хотя внести в своётворчество изменения в стиле, технике и подаче'], button: 'Кнопка текс' },])
    const [disable, setdisable] = useState([
        { id: 3, img: thidImg, title1: 'Мгновенный доступ', title2: 'Мужской портрет', listik: ['Нарисуем вместе 3 иллюстрации + мужской портрет', 'Рассмотрим все этапы рисования мужчин, фишки', 'Авторская техника', 'Подходит и новичкам и проф. художникам', '+Бонусы к обучению'], button: 'Кнопка текс' }
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
            <div className='infoBlock__carouselBox__titl1'>
                <div>
                    Авторские курсы
                    </div>
                <div>
                    Онлайн обучение на iPad
                     </div>
            </div>

            <div className="infoBlock__carouselBox1">



                <div className="infoBlock__carouselBox__but1" onClick={() => left()}>
                    <div class="arrow left"></div>
                </div>
                {active.length > 0 && active.map((item, index) => {
                    return (
                        <div key={index} className={'infoBlock__carouselBox__block1'}>
                            <div className='infoBlock__carouselBox__block--img1'><img src={item.img} alt={'sad'} /></div>
                            <div className='infoBlock__carouselBox__block1__info'>
                            <div className ='infoBlock__carouselBox__block1__tit'>
                                <div>
                                <div className='infoBlock__carouselBox__block--title11'>{item.title1}</div>
                                </div>
                                <div>
                                <div className='infoBlock__carouselBox__block--title21'>{item.title2}</div>
                                 </div>
                                 </div>
                            <div>{item.listik.map((item, index) => {
                                return (
                                    <div className='infoBlock__carouselBox__block__lst1'>
                                        <li key={index}>{item}</li>
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
            <div className='infoBlock__carouselBox__titl11'>
                <div className='infoBlock__carouselBox__titl11__t1'>
                   <h3>
                    Работы учеников по курсу, а так же по другим обучающим урокам от Maria Sw, вы всегда можете посмотреть по #учусь_у_mariasw
                    </h3>
                </div>
                <div className='infoBlock__carouselBox__titl11__txt'>
                    #учусь_у_mariasw
                </div>
            </div>



        </>

    )
}       
