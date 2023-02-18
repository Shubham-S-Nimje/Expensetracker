import React from 'react';
import './Expenceitem/Expences.css';
import Expences from './Expenceitem/Expences';

function App() {
  return React.createElement(
    'div',
    {},
    React.createElement(Expences, {Expence: Expences})
  );
  
  // return (
  //         <Expences Expence = {props.Expences} 
  //         />
  // );
}

export default App;
