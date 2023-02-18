import './Delbtn.css';
const ExpenceDelbtn = (props) => {
    const delExpense = () => {
        console.log('Delete Button clicked!...');
    };
    
    return (
        <button className="delbtn" onClick={delExpense}>Delete Expense</button>
    );
}
export default ExpenceDelbtn;