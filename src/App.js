
import './Expenceitem/Expenceitem.css';
import Expenceitem from './Expenceitem/Expenceitem';

function App() {
  const expences = [
    {
      id: 1,
      expencedate: new Date(2023,2,17),
      Expencetitle: 'Panipuri',
      Expenceprice: 30,
      Expencelocation: 'Mumbai'},
      {
        id: 2,
        expencedate: new Date(2023,2,16),
        Expencetitle: 'Movie',
        Expenceprice: 300,
        Expencelocation: 'Pune'},
        {
          id: 3,
          expencedate: new Date(2023,2,15),
          Expencetitle: 'Dinner',
          Expenceprice: 500,
          Expencelocation: 'alibag'},
  ];
  return (
    <div className="App">
      <header className="App-header">
        <h1>Expence Data</h1>
      <Expenceitem
      id={expences[0].id}
      expencedate={expences[0].expencedate}
      Expencetitle={expences[0].Expencetitle}
      Expenceprice={expences[0].Expenceprice}
      Expencelocation={expences[0].Expencelocation}
      ></Expenceitem>
      <Expenceitem
      id={expences[1].id}
      expencedate={expences[1].expencedate}
      Expencetitle={expences[1].Expencetitle}
      Expenceprice={expences[1].Expenceprice}
      Expencelocation={expences[1].Expencelocation}
      ></Expenceitem>
      <Expenceitem
      id={expences[2].id}
      expencedate={expences[2].expencedate}
      Expencetitle={expences[2].Expencetitle}
      Expenceprice={expences[2].Expenceprice}
      Expencelocation={expences[2].Expencelocation}
      ></Expenceitem>
      </header>
      
    </div>
  );
}

export default App;
