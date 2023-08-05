import "./index.css";
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
function Expense(props)
{
    return (
        <>
        <div className="expense-item">
        <ExpenseDate date={props.date}/>
        <ExpenseDetails title={props.title} amount={props.amount} location={props.location}/>
        </div>
        </>

    );
}
export default Expense;