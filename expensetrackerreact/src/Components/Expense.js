import "./index.css";
function Expense(props)
{
    return (
        <>
        <div className="expense-item">
        <div className="">{props.date}</div>
        <div className="expense-item__description">{props.title}</div>
        <div className="expense-item__price">{props.amount}</div>
        </div>
        </>

    );
}
export default Expense;