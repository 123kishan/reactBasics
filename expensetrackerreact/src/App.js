import ExpenseForm from './Components/ExpenseForm';
import Expense from './Components/Expense';
import {useState} from 'react';
function App() {
  let expenses = [
    {
      expenseDate: new Date(2020,2,10),
      title: "Groceries",
      expenseAmount: 50.0,
      location: "Deoria"
    },
    {
      expenseDate: new Date(2020,2,10),
      title: "Dinner",
      expenseAmount: 30.0,
      location: "gorakhpur"
    },
    {
      expenseDate: new Date(2020,2,10),
      title: "Gas",
      expenseAmount: 40.0,
      location: "delhi"
    },
    {
      expenseDate: new Date(2020,2,10),
      title: "Entertainment",
      expenseAmount: 20.0,
      location: "kanpur"
    },
  ];

  const [expenseItem,setExpense]=useState(expenses);
 
  function addExpenseHandler(expense)
  {
    setExpense([...expenses,expense]);
  }
  ///const expenseItem=document.getElementById("expenseItem");
  var expenseItemArray=[];
  for(let key in expenseItem)
  {
    expenseItemArray.push(<Expense key={key} date={expenseItem[key].expenseDate} title={expenseItem[key].title} amount={expenseItem[key].expenseAmount} location={expenseItem[key].location}></Expense>)
  }
  console.log(expenseItemArray);
  return (
    <>
    <h1>Let's Get started</h1>
    <ExpenseForm onSaveInForm={addExpenseHandler}/>
    {expenseItemArray}
    </>
  );
}

export default App;
