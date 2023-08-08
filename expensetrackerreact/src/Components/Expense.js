import "./index.css";
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
function Expense(props)
{
    const clickHandler=(e)=>{
        e.target.parentNode.remove();
    }
    return (
        <>
        <div className="expense-item">
        <ExpenseDate date={props.date}/>
        <ExpenseDetails title={props.title} amount={props.amount} location={props.location}/>
        <button onClick={clickHandler}>Delete Expense</button>
        </div>
        </>

    );
}
export default Expense;