
import './Expenceitem/Expenceitem.css';
import Expenceitem from './Expenceitem/Expenceitem';

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
          {
            id: 4,
            expencedate: new Date(2023,2,16),
            Expencetitle: 'Shopping',
            Expenceprice: 6500,
            Expencelocation: 'Mumbai'},
  ];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Expence Data</h1>
        {expences.map((ele) => {
          // const {id,expencedate,Expencetitle,Expenceprice,Expencelocation} = ele;
          return (
          <Expenceitem
          key={ele.id}
          id={ele.id}
          expencedate={ele.expencedate}
          Expencetitle={ele.Expencetitle}
          Expenceprice={ele.Expenceprice}
          Expencelocation={ele.Expencelocation}
          ></Expenceitem>
          // console.log(ele)
        );
          })}
      </header>
    </div>
  )
}

export default App;
