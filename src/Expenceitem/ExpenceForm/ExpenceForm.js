import React, {useState} from 'react';
import './ExpenceForm.css';
import './Expencecard.css';
import ExpenceCard from './Expencecard'
const ExpenceForm = () => {
  const [ontitlechange,settitlechange] = useState('');
  const [onpricechange,setpricechange] = useState('');
  const [ondatechange,setdatechange] = useState('');

  const amountchangehandler = (event) => {
    settitlechange(event.target.value);
    console.log(event.target.value);
  };
  const titlechangehandler = (event) => {
    setpricechange(event.target.value);
    console.log(event.target.value);
  };
  const datechangehandler = (event) => {
    setdatechange(event.target.value);
    console.log(event.target.value);
  };
    return (
    <ExpenceCard className="expenceCard">
      <form className="expenceform">
        <div className="inputtitle">
          <label>Enter Expence Title : </label><br></br>
          <input type="text" onChange={titlechangehandler}/>
        </div>
        <div className="inputamount">
          <label>Enter Expence Amount : </label><br></br>
          <input type="number" onChange={amountchangehandler} />
        </div>
        <div className="inputdate">
          <label>Select Expence Date : </label><br></br>
          <input type="date" min="2023-01-01" max="2023-12-31" onChange={datechangehandler}/>
        </div>
        <div className="submitbtn">
          <button type="submit" className="btn">Submit</button>
        </div>
        
      </form>
      </ExpenceCard>
      
    );
}
export default ExpenceForm;