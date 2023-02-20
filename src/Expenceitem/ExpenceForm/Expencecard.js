import './Expencecard.css';
import './ExpenceForm.css';
import ExpenceForm from './ExpenceForm'
const ExpenceCard = (props) => {
    const saveexpensedata = (enteredExpensedata) => {
        const expenceData = {
            ...enteredExpensedata,
            id: Math.random().toString()
          };
        //   console.log(expenceData)
          props.onAddExpences(expenceData);
    }

    return (
    <div className="expenceCard">
    <ExpenceForm onsaveexpensedata={saveexpensedata} />
    </div>
    );
}
export default ExpenceCard;