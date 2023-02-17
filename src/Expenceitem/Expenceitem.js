import './Expenceitem.css';

export default function Expenceitem(props)
{
    return (<div className="expencedata">
        <h3 className="id" >No. {props.id}</h3>
        <h3 className="expencedate" >{props.expencedate.toISOString()}</h3>
        <h3 className="Expencetitle" >{props.Expencetitle}</h3>
        <h3 className="Expencelocation" >{props.Expencelocation}</h3>
        <h3 className="Expenceprice" >Rs. {props.Expenceprice}/- Only</h3>
    </div>
    );
}