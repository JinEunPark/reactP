import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";

function App(props) {
  const expensesArray = [
    { title: "newnew", amount: 123123, date: new Date(1234, 12, 12) },
    { title: "hi", amount: 123123, date: new Date(1234, 12, 12) },
    { title: "my", amount: 123123, date: new Date(1234, 12, 12) },
    { title: "LOVW🤔", amount: 123123, date: new Date(1234, 12, 12) },
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js')
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses item = {expensesArray}/>
    </div>
  );
}

export default App; //export component
//대문자로 시작하는 것은 컴포넌트 클래스 이름
//소문자면 태그임
