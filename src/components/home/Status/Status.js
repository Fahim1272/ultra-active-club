import React, { useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Status.css'

const Status = (props) => {
    const [btndata, setBtndata] = useState(0);
    const addBreakTime = (data) => {
        localStorage.setItem('break time', data)
        setBtndata(data)
    }
    return (
        <div className='headerContainer' >
            <div className='header' data-aos="flip-left">
                <img src="" alt="" />
                <div>
                    <h4 style={{margin: '0px'}}>Fahim M Ishaq</h4>
                    <p style={{margin: '0px'}}>Chittagong, Bangladesh</p>
                </div>
            </div>
            <div className='Status' data-aos="fade-right">
                <div>
                    <h4 style={{margin: '0px'}}>62KG</h4>
                    <p style={{margin: '0px'}}>Weight</p>
                </div>
                <div>
                    <h4 style={{margin: '0px'}}>5.6</h4>
                    <p style={{margin: '0px'}}>height</p>
                </div>
                <div>
                    <h4 style={{margin: '0px'}}>24</h4>
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

export default Status;