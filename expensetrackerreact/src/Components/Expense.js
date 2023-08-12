import "./index.css";
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import React,{ useState } from 'react';
function Expense(props)
{
    const [title,setTitle]=useState(props.title);
    const clickHandler=()=>{
        setTitle('Updated!');
        //e.target.parentNode.remove();
    }
    return (
        <>
        <div className="expense-item">
        <ExpenseDate date={props.date}/>
        <ExpenseDetails title={title} amount={props.amount} location={props.location}/>
        <button onClick={clickHandler}>Update Expense Title</button>
        </div>
        </>

    );
}
export default Expense;