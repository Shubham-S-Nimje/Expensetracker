import ExpenceDatedata from './ExpenceDate';
import Expencetitledata from './ExpenceTitle';
import Expencelocationdata from './ExpenceLocation';
import Expencepricedata from './ExpencePrice';
import Carddata from '../UI/Card'
import ExpenceDelbtn from './DelBtn'
import './Expenceitem.css';
import './Delbtn.css';

const Expenceitem = (props) => {
    return (
    <Carddata className="expencedata">
        <ExpenceDatedata Expencedate={props.Expencedate} />
        <Expencetitledata Expencetitle={props.Expencetitle} />
        <Expencelocationdata Expencelocation={props.Expencelocation} />
        <Expencepricedata Expenceprice={props.Expenceprice}/>
        <ExpenceDelbtn Expencedelbtn={props.Expencedelbtn}/>
    </Carddata>
    );
}
export default Expenceitem;