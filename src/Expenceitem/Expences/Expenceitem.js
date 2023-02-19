import React, { useState } from 'react';
import ExpenceDatedata from './ExpenceDate';
import Expencetitledata from './ExpenceTitle';
import Expencelocationdata from './ExpenceLocation';
import Expencepricedata from './ExpencePrice';

import Carddata from '../UI/Card'
import ExpenceDelbtn from './DelBtn'
import './Expenceitem.css';
import './Delbtn.css';
   
const Expenceitem = (props) => {
   const [title, setTitle] = useState(props.Expencetitle);
   const [price, setPrice] = useState(props.Expenceprice);
    const Updatetitle = () => {
        setTitle('Updated');
        console.log(title);
    };
    const Updateprice = () => {
        setPrice('100');
        console.log(price);
    };
    return (
    <Carddata className="expencedata">
        <ExpenceDatedata Expencedate={props.Expencedate} />
        <Expencetitledata Expencetitle={title} />
        <Expencelocationdata Expencelocation={props.Expencelocation} />
        <Expencepricedata Expenceprice={price}/>
        <button className="delbtn" onClick={Updatetitle}>Change Title</button>
        <button className="delbtn" onClick={Updateprice}>Change price</button>
        <ExpenceDelbtn Expencedelbtn={props.Expencedelbtn}/>
    </Carddata>
    );
}
export default Expenceitem;