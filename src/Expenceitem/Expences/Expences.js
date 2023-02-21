import { useState } from 'react';
import Expenceslist from './Expenceslist';
import Carddata from '../UI/Card';
import Expencefilter from './Expencefilter';
import Expenceschart from './Expenceschart'
import './Expences.css';

  const Expences = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterchangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    };

    const filteredExpences = props.item.filter(expense => {
      return expense.Expencedate.getFullYear().toString() === filteredYear;
    })

  return (
    <div className="App">
      <Carddata className="Expences">
        <h1>Expence Data</h1>
        <Expencefilter selected={filteredYear}
         onChangeFilter={filterchangeHandler}
         />
         <Expenceschart expenses={filteredExpences}/>
         <Expenceslist item={filteredExpences} />
      </Carddata>
    </div>
  )
}

export default Expences;
