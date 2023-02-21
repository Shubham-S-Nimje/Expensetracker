import React, {useState} from 'react';
import './Expenceitem/Expences/Expences.css';
import Expences from './Expenceitem/Expences/Expences';
import ExpenceCard from './Expenceitem/ExpenceForm/Expencecard'
const Dummy_expences = [
  {
    id: 1,
    Expencedate: new Date(2023,2,17),
    Expencetitle: 'Panipuri',
    Expenceprice: 40,
    Expencelocation: 'Mumbai'},
    {
      id: 2,
      Expencedate: new Date(2023,2,16),
      Expencetitle: 'Movie',
      Expenceprice: 300,
      Expencelocation: 'Pune'},
      {
        id: 3,
        Expencedate: new Date(2023,2,15),
        Expencetitle: 'Dinner',
        Expenceprice: 500,
        Expencelocation: 'Alibag'},
        {
          id: 4,
          Expencedate: new Date(2023,2,16),
          Expencetitle: 'Shopping',
          Expenceprice: 6500,
          Expencelocation: 'Mumbai'},
];
const App = () => {
  const [expenses, setExpenses] = useState(Dummy_expences)
  const addExpenseHandler = expense => {
    // console.log('in app.js');
    // console.log(expense)
    setExpenses (prevExpences => {
      return [expense, ...prevExpences]
    });
    }
  return (
    <div>
      <ExpenceCard onAddExpences = {addExpenseHandler}/>
      <Expences item = {expenses}
      />

    </div>

  )
  // return React.createElement(
  //       'div',
  //       {},
  //       React.createElement(ExpenceCard, {ExpenceCard: ExpenceCard}),
  //       React.createElement(Expences, {Expence: Expences})
        
  //     );
}
// function App() {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement(Expences, {Expence: Expences})
//   );
  
//   // return (
//   //         <Expences Expence = {props.Expences} 
//   //         />
//   // );
// }

export default App;
