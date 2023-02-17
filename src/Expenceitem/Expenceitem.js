import ExpenceDatedata from './ExpenceDate';
import Expencetitledata from './ExpenceTitle';
import Expencelocationdata from './ExpenceLocation';
import Expencepricedata from './ExpencePrice';
import './Expenceitem.css';

export default function Expenceitem(props){return (
    <div className="expencedata">
        <ExpenceDatedata Expencedate={props.Expencedate} />
        <Expencetitledata Expencetitle={props.Expencetitle} />
        <Expencelocationdata Expencelocation={props.Expencelocation} />
        <Expencepricedata Expenceprice={props.Expenceprice}>/- Only</Expencepricedata>
    </div>
    );
}