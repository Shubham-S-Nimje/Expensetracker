import React from 'react';
import './Expenceitem/Expences/Expences.css';
import Expences from './Expenceitem/Expences/Expences';

const App = () => {
  return React.createElement(
        'div',
        {},
        React.createElement(Expences, {Expence: Expences})
      );
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
