//import Expense from './Expense';
import {useState} from 'react';
function ExpenseForm(props)
{
    /*var title1=document.getElementById("expenseTitle");
    var date1=document.getElementById("expenseDate");
    var amount1=document.getElementById("expenseAmount");*/
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');
    function changeEnteredTitle(e)
    {
        e.preventDefault();
        setEnteredTitle(e.target.value);
    }
    
    function changeEnteredAmount(e)
    {
        e.preventDefault();
        setEnteredAmount(e.target.value);
    }
    function changeEnteredDate(e)
    {
        e.preventDefault();
        setEnteredDate(e.target.value);
    }
    
    function addExpense(e)
    {
        e.preventDefault();
        let obj=
    {
        title: enteredTitle,
        expenseAmount: enteredAmount,
        expenseDate: new Date(enteredDate),
        location: "anywhere"
    }
        props.onSaveInForm(obj);
    }
    return(
        <>
                <form onSubmit={addExpense}>
        <label htmlFor="expenseTitle">Expense Title:</label>
        <input type="text" id="expenseTitle" name="expenseTitle" value={enteredTitle} onChange={changeEnteredTitle} required/>
        <br/>

        <label htmlFor="expenseAmount">Expense Amount:</label>
        <input type="number" id="expenseAmount" name="expenseAmount" min="0" step="0.01" value={enteredAmount} onChange={changeEnteredAmount} required/>
        <br/>

        <label htmlFor="expenseDate">Expense Date:</label>
        <input type="date" id="expenseDate" name="expenseDate" value={enteredDate} onChange={changeEnteredDate} required/>
        <br/>

        <button>Add Expense</button>
        </form>
        </>

    );

}
export default ExpenseForm;