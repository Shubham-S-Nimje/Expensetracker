import './Card.css'

function Carddata (props){
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}
    </div>;
}
export default Carddata;