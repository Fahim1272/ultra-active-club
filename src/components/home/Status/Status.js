import React, { useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Details.css'

const Details = (props) => {
    const [btndata, setBtndata] = useState(0);
    const addBreakTime = (data) => {
        localStorage.setItem('break time', data)
        setBtndata(data)
    }
    return (
        <div className='headerContainer' >
            <div className='header' data-aos="flip-left">
                <img src="https://scontent.fcgp28-1.fna.fbcdn.net/v/t39.30808-1/308159519_1998417517036004_4477928965042593796_n.jpg?stp=dst-jpg_p160x160&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=o66qP8V66mYAX-kILWP&tn=UTuTmQy4PcmAA295&_nc_ht=scontent.fcgp28-1.fna&oh=00_AT9q8BL6-vUsAyUjni0tD_5WDxRcSFas7D0Tv7wWpxGdIQ&oe=633A4AA1" alt="" />
                <div>
                    <h4 style={{margin: '0px'}}>Showaib bin Nasir</h4>
                    <p style={{margin: '0px'}}>Chittagong, Bangladesh</p>
                </div>
            </div>
            <div className='details' data-aos="fade-right">
                <div>
                    <h4 style={{margin: '0px'}}>59KG</h4>
                    <p style={{margin: '0px'}}>Weigth</p>
                </div>
                <div>
                    <h4 style={{margin: '0px'}}>5.9</h4>
                    <p style={{margin: '0px'}}>height</p>
                </div>
                <div>
                    <h4 style={{margin: '0px'}}>23</h4>
                    <p style={{margin: '0px'}}>Age</p>
                </div>
            </div>
            <h4>Add a break</h4>
            <div className='buttons' data-aos="zoom-in">
                <button onClick={(e) => addBreakTime(e.target.innerText)}>10s</button>
                <button onClick={(e) => addBreakTime(e.target.innerText)}>20s</button>
                <button onClick={(e) => addBreakTime(e.target.innerText)}>30s</button>
                <button onClick={(e) => addBreakTime(e.target.innerText)}>40s</button>
                <button onClick={(e) => addBreakTime(e.target.innerText)}>50s</button>
            </div>
            <br />
            <Exercise data = {btndata} dataTwo={props.data}></Exercise>
        </div>
    );
};

export default Details;