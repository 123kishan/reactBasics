import './index.css';
function ExpenseDetails(props) {
  return (
    <div>
      <div className="expense-item__description">{props.title}</div>
      <div className="expense-item__description">{props.location}</div>
      <div className="expense-item__price">{props.amount}</div>
      
    </div>
  );
}
export default ExpenseDetails;
