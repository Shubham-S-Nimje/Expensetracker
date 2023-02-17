
import './Expenceitem/Expenceitem.css';
import Expenceitem from './Expenceitem/Expenceitem';

 const expences = [
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
          Expencedate={ele.Expencedate}
          Expencetitle={ele.Expencetitle}
          Expenceprice={ele.Expenceprice}
          Expencelocation={ele.Expencelocation}
          />
          // console.log(ele)
        );
          })}
      </header>
    </div>
  )
}

export default App;
