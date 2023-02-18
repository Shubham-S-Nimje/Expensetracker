import './Card.css'

const Carddata = (props) => {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}
    </div>;
}
export default Carddata;