import React, { useState } from 'react'
import './Expencecard.css';
import './ExpenceForm.css';
import ExpenceForm from './ExpenceForm'
const ExpenceCard = (props) => {
    const saveexpensedata = (enteredExpensedata) => {
        const expenceData = {
            id: Math.random().toLocaleString(), ...enteredExpensedata
          };
        //   console.log(expenceData)
          props.onAddExpences(expenceData);
    }
      const [isediting, setEditing] = useState(false)
      const startEditingHandler = () => {
      setEditing(true)
      }

      const stopEditingHandler = () => {
        setEditing(false)
        }

    return (
    <div className="expenceCard">
      {!isediting && <button className='btn' onClick={startEditingHandler}>Add Expences</button>}
    {isediting && <ExpenceForm onsaveexpensedata={saveexpensedata} onCancel={stopEditingHandler}/>}
    </div>
    );
}
export default ExpenceCard;