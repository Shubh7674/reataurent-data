import React from 'react';
import ReactDOM from 'react-dom'
import './restaurent.css'
import Grade from '../grades/index'
import Grades from '../grades/index';
import mapImage from '../../../containers/download.png';




const Restaurent =(props)=>{
   
   const clickedSummary=(e, data)=>{debugger
    let a = ReactDOM.findDOMNode(this).parentNode('details').open=true;

    this.parent('details').open=true;
   }
    const imageStyle={
        "width":"40px"
    }

    return(
        <>
            <details className="details">
                <summary className="summary">{props.item.name}</summary>
                <div>
                    <span>Administrative division: {props.item.borough}</span>
                    <span>Cuisine: {props.item.cuisine}</span>
                </div>
                <div>
                    <address> address:<br/  >
                     {props.item.address.building},{props.item.address.street}, zipcode - {props.item.address.zipcode} <br/>
                    
                    </address>
                </div>
                


                <a 

                    type="button"
                    target="_blank" 
                    rel="noreferrer" 
                    href={"http://maps.google.co.uk/maps?q="+props.item.address.coord[1]+","+props.item.address.coord[0]}>
                    <img src={mapImage} style={imageStyle}  alt="Flower"></img>View on Map
                </a>
                <div>
                    <a  onClick={()=>{}}>Ratings</a>
                    {props.item.grades.map((data,index)=><Grades key={index} grade={data} />) }
                        {/* { props.showRes ? props.item.grades.map((data,index)=><Grades grade={data} />) : null } */}
                </div>

            </details>
        </>
    )
}

export default Restaurent;