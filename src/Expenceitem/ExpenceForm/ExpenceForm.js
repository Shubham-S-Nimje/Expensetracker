import React, {useState} from 'react';
import './ExpenceForm.css';
const ExpenceForm = (props) => {
  const [ontitlechange,settitlechange] = useState('')
  const [onpricechange,setpricechange] = useState('')
  const [ondatechange,setdatechange] = useState('')
  // const [userInput,setuserInput] = useState({
  //   ontitlechange: '',
  //   onpricechange: '',
  //   ondatechange: ''
  // })

  const titlechangehandler = (event) => {
    settitlechange(event.target.value);
    // setuserInput({
    //   ...userInput,
    //   ontitlechange: event.target.value,
    // })
    // setuserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     ontitlechange: event.target.value
    //   };
    // })
    // console.log(event.target.value);
  };
  const amountchangehandler = (event) => {
    setpricechange(event.target.value);
    // setuserInput({
    //   ...userInput,
    //   onpricechange: event.target.value,
    // })
    // setuserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     onpricechange: event.target.value
    //   };
    // })
    // console.log(event.target.value);
  };
  const datechangehandler = (event) => {
    setdatechange(event.target.value)
    // setuserInput({
    //   ...userInput,
    //   ondatechange: event.target.value,
    // })
    // setuserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     ondatechange: event.target.value
    //   };
    // })
    // console.log(event.target.value);
  };
  const submitform = (event) => {
    event.preventDefault();
    const expenceData = {
      Expencetitle : ontitlechange,
      Expenceprice : +onpricechange,
      Expencedate : new Date(ondatechange)
    };
    props.onsaveexpensedata(expenceData);
    settitlechange('');
    setpricechange('');
    setdatechange('');

  }
    return (
      <form className="expenceform" onSubmit={submitform}>
        <div className="inputtitle">
          <label>Enter Expence Title : </label><br></br>
          <input type="text" value={ontitlechange} onChange={titlechangehandler}/>
        </div>
        <div className="inputamount">
          <label>Enter Expence Amount : </label><br></br>
          <input type="number" value={onpricechange} onChange={amountchangehandler} />
        </div>
        <div className="inputdate">
          <label>Select Expence Date : </label><br></br>
          <input type="date" min="2023-01-01" max="2023-12-31" value={ondatechange} onChange={datechangehandler}/>
        </div>
        <div className="submitbtn">
          <button type="cancel" className="btn" onClick={props.onCancel}>Cancel</button>
          <button type="submit" className="btn canbtn">Submit</button>
        </div>
      </form>
    );
}
export default ExpenceForm;