
import Expenceitem from './Expenceitem';
import Carddata from '../UI/Card';
import Expencefilter from './Expencefilter';
import './Expences.css';
import { useState } from 'react';

  const Expences = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterchangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    };
  return (
    <div className="App">
      <Carddata className="Expences">
        <h1>Expence Data</h1>
        <Expencefilter selected={filteredYear} onChangeFilter={filterchangeHandler} />
        {props.item.map((ele) => {
          return (
          <Expenceitem
          key={ele.id}
          id={ele.id}
          Expencedate={ele.Expencedate}
          Expencetitle={ele.Expencetitle}
          Expenceprice={ele.Expenceprice}
          Expencelocation={ele.Expencelocation}
          />
        );
          })}
      </Carddata>
    </div>
  )
}

export default Expences;
