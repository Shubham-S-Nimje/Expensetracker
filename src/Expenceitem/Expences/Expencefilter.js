import './Expencefilter.css';
const Expencefilter = (props) => {
    const dropdownChangeHandler = (event) => {
          props.onChangeFilter(event.target.value);
    }

    return (
    <div className="expenceFilter">
      <div className="expenceFiltercontrol">
        <label>Filter by Year : </label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2022">2021</option>
          <option value="2022">2020</option>
          <option value="2022">2019</option>
        </select>
      </div>
    </div>
    );
}
export default Expencefilter;