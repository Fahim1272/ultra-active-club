import React, { useState } from 'react';
import Card from '../Card/Card';
import Details from '../Details/Details';
import './Home.css'

const Home = () => {
    const [data, setData] = useState(0);
    
    const addToList = (time) => {
        
        
        
        setData(data + time)
    }
    
    return (
        <div>
            <div className='container'>
                <div>
                    <Card event={addToList}></Card>
                </div>
                <div>
                    <Details data = {data}></Details>
                </div>
            </div>
            <h1 style={{textAlign: 'center', marginTop:'100px'}}>FAQ</h1>
            <div className='question'>
                <div data-aos="fade-up-left">
                    <h1>Difference between props and state?</h1>
                    <h4 style={{color : 'grey', fontWeight : '400'}}>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</h4>
                </div>
                <div data-aos="fade-up-right">
                    <h1>How does react work?</h1>
                    <h4 style={{color : 'grey', fontWeight : '400'}}>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</h4>
                </div>
                <div data-aos="fade-down-right">
                    <h1>The use of useEffect hook.</h1>
                    <h4 style={{color : 'grey', fontWeight : '400'}}>Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.</h4>
                </div>
            </div>
        </div>
        
        
        
    );
};

export default Home;