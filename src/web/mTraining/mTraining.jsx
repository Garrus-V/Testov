import React from 'react';
import logo from '../../images/1.jpg'
import train from './mTraining.module.css';



const Mtraining =(props)=> {
   
    return (
        <div className={train.train}>
            <div className = "text">
             Какой-то текст 2
             </div>
            <div className = 'imge'>
            <img src= {logo} alt="картинка"/>
            </div>
             
        
        </div>
        );
            
    }   
    
    export default Mtraining;