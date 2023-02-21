import React from 'react';
import './ExpenceDate.css';
const ExpenceDatedata = (props) => {
    const month = props.Expencedate.toLocaleString('en-US',{month:'long'});
    const year = props.Expencedate.getFullYear();
    const day = props.Expencedate.toLocaleString("en-US",{day:'2-digit'});
    
    return (
        <div className="expencedate">
            <p className="month">{month}</p>
            <p className="year">{year}</p>
            <p className="day">{day}</p>
        </div>
    );
}
export default ExpenceDatedata;