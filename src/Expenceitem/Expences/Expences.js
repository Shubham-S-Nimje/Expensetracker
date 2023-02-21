import { useState } from 'react';
import Expenceitem from './Expenceitem';
import Carddata from '../UI/Card';
import Expencefilter from './Expencefilter';
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
        {filteredExpences.map((ele) => (
          <Expenceitem
          key={ele.id}
          Expencedate={ele.Expencedate}
          Expencetitle={ele.Expencetitle}
          Expenceprice={ele.Expenceprice}
          Expencelocation={ele.Expencelocation}
          />
        
        ))}
      </Carddata>
    </div>
  )
}

export default Expences;
