import React from 'react';
import './ActivityCard.css'

const ActivityCard = (props) => {
    // console.log(props.activity);
    const {picture, name, about, age, time }=props.activity;
    
    return (
        <div className='cardDetails' data-aos="zoom-in-left">
                        <div>
                <img src={picture} alt="" />
                <h5 style={{margin : '2px'}}>{name}</h5>
                <h5 style={{color : 'grey', 
                margin: '2px', 
                fontWeight : '400',
                fontSize: '12px'}}>{about}</h5>
                <h6 style={{margin : '0px'}}>Age : {age}</h6>
                <h5 style={{margin : '0px'}}>Time : {time}</h5>
                <br />
            </div>
            <div style={{
                display : 'flex',
                justifyContent : 'center'
            }}>
                
                <button onClick={()=> event(time)} className='listBtn'>Add to list</button>
            </div>
        </div>
        // <div className ='card'>
        //    <div className ='card-details'>
        //    <img src={picture} alt="" />
        //    <h4>{name}</h4>
        //    <p>{about}</p>
        //    <h6>Age:{age}</h6>
        //    <h6>Time{time}</h6>
           
        //    </div>
        //    <button className='btn1'><b>Add to list</b></button>
        // </div>
    );
};

export default ActivityCard;