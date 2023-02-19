import './Delbtn.css';
const ExpenceDelbtn = (props) => {
    const delExpense = () => {
        document.getElementsByClassName('expencedata').removeChild(document.getElementsByClassName('Expencetitle'))
        console.log('updated!...');
    };
    return (
        <button className="delbtn" onClick={delExpense}>X</button>
    );
}
export default ExpenceDelbtn;