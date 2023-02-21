import React from 'react';
import Expenceitem from './Expenceitem';
import './Expenceslist.css';

  const Expenceslist = (props) => {
    let expenceContent = '';
    if(props.item.length === 0) {
      expenceContent = <p>No Expenses Found</p>
    }
    else if(props.item.length === 1) {
      expenceContent = <p>Only single Expense here. Please add more...</p>
    }
  return (
    <div className="Expenceslist">
      {props.item.map((ele) => (
      <Expenceitem
          key={ele.id}
          Expencedate={ele.Expencedate}
          Expencetitle={ele.Expencetitle}
          Expenceprice={ele.Expenceprice}
          Expencelocation={ele.Expencelocation}
          />
      ))}
      {expenceContent}
    </div>
  )
}

export default Expenceslist;
