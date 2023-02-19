import './ExpenceForm.css';
import './Expencecard.css';
import ExpenceCard from './Expencecard'
const ExpenceForm = () => {
  const amountchangehandler = (event) => {
    console.log(event.target.value);
  };
  const textchangehandler = (event) => {
    console.log(event.target.value);
  };
    return (
    <ExpenceCard className="expenceCard">
      <form className="expenceform">
        <div className="inputtitle">
          <label>Enter Expence Title : </label><br></br>
          <input type="text" onChange={textchangehandler}/>
        </div>
        <div className="inputamount">
          <label>Enter Expence Amount : </label><br></br>
          <input type="number" onChange={amountchangehandler} />
        </div>
        <div className="inputdate">
          <label>Select Expence Date : </label><br></br>
          <input type="date" min="2023-01-01" max="2023-12-31" />
        </div>
        <div className="submitbtn">
          <button type="submit" className="btn">Submit</button>
        </div>
        
      </form>
      </ExpenceCard>
      
    );
}
export default ExpenceForm;