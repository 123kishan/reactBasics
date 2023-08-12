import './ExpenseFilter.css';
function ExpenseFilter(props) {
    function changeYear(e)
    {
        e.preventDefault();
        props.onChoose(e.target.value);
        //console.log(document.getElementById("Year").value);
    }
  return (
    <>
      <select name="year" id="Year" onChange={changeYear}>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </>
  );
}
export default ExpenseFilter;
