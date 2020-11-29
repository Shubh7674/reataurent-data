import React from 'react';
import Restaurent from './restaurent/restaurent'

const Restaurents =(props)=>{
    console.log(props.items);
    return(
        <div className="restaurents">
         {props.items.map((person, index)=><Restaurent key={person._id} item={person}/>)}
        </div>
    )
}

export default Restaurents;