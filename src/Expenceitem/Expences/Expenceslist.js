import React from 'react';
import Expenceitem from './Expenceitem';
import './Expenceslist.css';

  const Expenceslist = (props) => {

    if(props.item.length === 0) {
      return <p>No Expenses Found</p>
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
    </div>
  )
}

export default Expenceslist;
