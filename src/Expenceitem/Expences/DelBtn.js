import './Delbtn.css';
const ExpenceDelbtn = (props) => {
    const delExpense = () => {
        console.log('updated!...');
    };
    return (
        <button className="delbtn" onClick={delExpense}>X</button>
    );
}
export default ExpenceDelbtn;