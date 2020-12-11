import React, { useState, useEffect } from 'react';
import './Sets.module.css'
import firstImg from '../../images/4.jpg'
import secImg from '../../images/5.jpg'
import thidImg from '../../images/6.jpg'

export default function Sets() {
    const [arrFix, setarrFix] = useState(3)
    const [active, setactive] = useState([
        { id: 1, img: firstImg, title1: 'Доступен курс БлаБла', title2: 'Детский портрет с нуля', listik: ['50 уроков', 'Основы рисунка', 'анатомия'], button: 'Кнопка текс' },
        { id: 2, img: secImg, title1: 'Доступен курс', title2: 'портрет с нуля', listik: ['50 уроков', 'Основы рисунка', 'Детская анатомия'], button: 'Кнопка текс' },])
    const [disable, setdisable] = useState([
        { id: 3, img: thidImg, title1: 'курс БлаБла', title2: 'Детский портрет', listik: ['50 уроков', 'Основы рисунка', 'Детская анатомия'], button: 'Кнопка текс' }
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


            <div className="infoBlock__carouselBox">
                <div className="infoBlock__carouselBox__but" onClick={() => left()}>
                    <p>&lt;</p>
                  </div>
                {active.length > 0 && active.map((item, index) => {
                    return (
                        <div key={index} className={'infoBlock__carouselBox__block'}>
                            <div className='infoBlock__carouselBox__block--img'><img src={item.img} alt={'sad'} /></div>
                            <div className='infoBlock__carouselBox__block--title1'>{item.title1}</div>
                            <div className='infoBlock__carouselBox__block--title2'>{item.title2}</div>
                            <div>{item.listik.map((item, index) => {
                                return (
                                    <li key={index}>{item}</li>
                                )
                            })}</div>
                        </div>
                    )
                })}
                <div className="infoBlock__carouselBox__but" onClick={() => rigth()}>
                    <p>&gt;</p>
                </div>
            </div>
        </>
    )
}       
