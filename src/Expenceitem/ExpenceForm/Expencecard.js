import './Expencecard.css';

const ExpenceCard = (props) => {
    const classes = 'expenceCard ' + props.className;
    return <div className={classes}>{props.children}
    </div>;
}
export default ExpenceCard;