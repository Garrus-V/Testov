import React from 'react';
import Feed from '../Components/Feedback/feed';
import feed from './Feedback.module.css';
import feede from './Feedback.module.css';
import h from './Feedback.module.css';


export default function Feedback(props) {

    return (

        <div className={feed.feedback}>
            <div>
                <div className={h.tut}>
                    Узнавай первым о творческих новинках
            </div>
                <div className='list'>
                    <ul>
                        <li>Актуальные курсы</li>
                        <li>Прямые эфиры</li>
                        <li>Челленджи / марафоны</li>
                        <li>Новые видеоуроки</li>
                    </ul>
                </div>
                <p>Я буду уведомлять тебя, если будет происходить что-нибудь очень интересное :)</p>
            </div>
            <div className={feede.feede}>
                <Feed />
            </div>

        </div>
    );

}

