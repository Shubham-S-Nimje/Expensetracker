export default function Expenceitem()
{
    const expencedate = new Date(2023,2,17);
    const Expencetitle = 'Panipuri';
    const Expenceprice = 30;
    const Expencelocation = 'mumbai';
    return <div>
        <h1>Expence Data</h1>
        <h2>Date : {expencedate.toISOString()}</h2>
        <h3>Expence in : {Expencetitle}</h3>
        <p>Expence Cost : Rs. {Expenceprice}/- Only</p>
        <p>Expence location{Expencelocation}</p>
    </div>
}