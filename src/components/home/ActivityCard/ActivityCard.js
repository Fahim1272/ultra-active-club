import React from 'react';
import './ActivityCard.css'

const ActivityCard = (props) => {
    // console.log(props.activity);
    const {picture, name, about, age, time }=props.activity;
    
    return (
        <div className ='card'>
           <div className ='card-details'>
           <img src={picture} alt="" />
           <h4>{name}</h4>
           <p>{about}</p>
           <h6>Age:{age}</h6>
           <h6>Time{time}</h6>
           
           </div>
           <button className='btn1'><b>Add to list</b></button>
        </div>
    );
};

export default ActivityCard;