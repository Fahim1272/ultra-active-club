import React, { useEffect, useState } from 'react';
import ActivityCard from '../ActivityCard/ActivityCard';
import './Activities.css';

const Activites = () => {
    const [activities, setActivity] = useState([]);
    useEffect(() =>{
        fetch('activities.json')
        .then(res => res.json())
        .then(data => setActivity(data))
    },[])
    return (
        
        <div className='activity'>
            <div className="activity-name">
                   {
                        activities.map(activity =><ActivityCard 
                            key={activity.id}
                            activity ={activity}
                            ></ActivityCard>)
                   }
            </div>
            <div className="activity-status">
                <h2>Status</h2>
            </div>
        </div>
    );
};

export default Activites;