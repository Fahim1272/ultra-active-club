import React from 'react';
import './Cards.css'

const Cards = (props) => {
    const {data, event} = props;
    const {img, time, age, name, status} = data
     return (
        <div className='cardStatus' data-aos="zoom-in-left">
            <div>
                <img src={img} alt="" />
                <h5 style={{margin : '2px'}}>{name}</h5>
                <h5 style={{color : 'grey', 
                margin: '2px', 
                fontWeight : '400',
                fontSize: '12px'}}>{status}</h5>
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
    );
};

export default Cards;