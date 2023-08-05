
import Expense from './Components/Expense';
function App() {
  let expenses = [
    {
      expenseDate: "2023-08-01",
      title: "Groceries",
      expenseAmount: 50.0,
    },
    {
      expenseDate: "2023-08-02",
      title: "Dinner",
      expenseAmount: 30.0,
    },
    {
      expenseDate: "2023-08-03",
      title: "Gas",
      expenseAmount: 40.0,
    },
    {
      expenseDate: "2023-08-04",
      title: "Entertainment",
      expenseAmount: 20.0,
    },
  ];

  return (
    <>
    <h1>Let's Get started</h1>
    <Expense date={expenses[0].expenseDate} title={expenses[0].title} amount={expenses[0].expenseAmount}/>
    <Expense date={expenses[1].expenseDate} title={expenses[1].title} amount={expenses[1].expenseAmount}/>
    <Expense date={expenses[2].expenseDate} title={expenses[2].title} amount={expenses[2].expenseAmount}/>
    <Expense date={expenses[3].expenseDate} title={expenses[3].title} amount={expenses[3].expenseAmount}/>

    </>
  );
}

export default App;
