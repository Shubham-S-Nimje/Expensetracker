import ExpenceDatedata from './ExpenceDate';
import Expencetitledata from './ExpenceTitle';
import Expencelocationdata from './ExpenceLocation';
import Expencepricedata from './ExpencePrice';
import Carddata from '../UI/Card'
import './Expenceitem.css';

const Expenceitem = (props) => {
    return (
    <Carddata className="expencedata">
        <ExpenceDatedata Expencedate={props.Expencedate} />
        <Expencetitledata Expencetitle={props.Expencetitle} />
        <Expencelocationdata Expencelocation={props.Expencelocation} />
        <Expencepricedata Expenceprice={props.Expenceprice}/>
    </Carddata>
    );
}
export default Expenceitem;