import React, { useState, useEffect } from 'react';
import './Sets.css'
import firstImg from '../../images/01.jpg'
import secImg from '../../images/02.jpg'
import thidImg from '../../images/03.jpg'

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


            <div className="infoBlock__carouselBox4">
                <div className="infoBlock__carouselBox__but4" onClick={() => left()}>
                    <p>&lt;</p>
                  </div>
                {active.length > 0 && active.map((item, index) => {
                    return (
                        <div key={index} className={'infoBlock__carouselBox__block4'}>
                            <div className='infoBlock__carouselBox__block--img4'><img src={item.img} alt={'sad'} /></div>
                            <div className='infoBlock__carouselBox__block--title14'>{item.title1}</div>
                            <div className='infoBlock__carouselBox__block--title24'>{item.title2}</div>
                            <div>{item.listik.map((item, index) => {
                                return (
                                    <li key={index}>{item}</li>
                                )
                            })}</div>
                        </div>
                    )
                })}
                <div className="infoBlock__carouselBox__but4" onClick={() => rigth()}>
                    <p>&gt;</p>
                </div>
            </div>
        </>
    )
}       
