import ExpenseForm from "./Components/ExpenseForm";
import Expense from "./Components/Expense";
import ExpenseFilter from "./Components/ExpenseFilter";
import ExpenseChart from './Components/ExpenseChart';
import { useState } from "react";
function App() {
  let expenses = [
    {
      id: 1,
      expenseDate: new Date(2020, 2, 10),
      title: "Groceries",
      expenseAmount: 50.0,
      location: "Deoria",
    },
    {
      id: 2,
      expenseDate: new Date(2020, 2, 10),
      title: "Dinner",
      expenseAmount: 30.0,
      location: "gorakhpur",
    },
    {
      id: 3,
      expenseDate: new Date(2020, 2, 10),
      title: "Gas",
      expenseAmount: 40.0,
      location: "delhi",
    },
    {
      id: 4,
      expenseDate: new Date(2020, 2, 10),
      title: "Entertainment",
      expenseAmount: 20.0,
      location: "kanpur",
    },
  ];

  
  const [expenseItem, setExpense] = useState(expenses);

  function addExpenseHandler(expense) {
    setExpense([...expenseItem, expense]);
  }
  ///const expenseItem=document.getElementById("expenseItem");
  
  const [filteredYear,setFilteredYear]=useState("2020");
    
    function onFilter(year) {
     
    
      setFilteredYear(year);
      console.log(filteredYear);
    }
    const filteredExpenses = expenseItem.filter(
      (expense) => expense.expenseDate.getFullYear().toString() === filteredYear
    );
    let expenseContent=<p>No Result Found</p>;
    if(filteredExpenses.length>0)
    {
      expenseContent=filteredExpenses.map((expenses) => (
        <Expense
          key={expenses.id}
          date={expenses.expenseDate}
          title={expenses.title}
          amount={expenses.expenseAmount}
          location={expenses.location}
        />

      ));
    }
  return (
    <>
      <h1>Let's Get started</h1>
      <ExpenseForm onSaveInForm={addExpenseHandler} />
      <ExpenseChart expenseList={filteredExpenses}/>
      <div>
        <ExpenseFilter selected={filteredYear} onChoose={onFilter}/>
        {filteredExpenses.length===1?
        (<div>
          <p>Only single Expense here.Please add more..</p>
          {expenseContent}
        </div>):(expenseContent)
        }
      </div>
    </>
  );
}

export default App;
