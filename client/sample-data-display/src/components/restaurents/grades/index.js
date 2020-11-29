import React from 'react';
import ReactDOM from 'react-dom'
import './style.css'
import Moment from 'moment';

const Grades=(props)=>{
    Moment.locale('en');
    var dt = props.grade.date;
    return(
                <ul>
                    <li>
                    <h6>Grading date: {Moment(dt).format('d MMM yyyy')}</h6>
                        <h6>Grade: {props.grade.grade}</h6>   
                        <h6>Score: {props.grade.score}</h6>
                    </li>
                </ul>    
    )
}

export default Grades