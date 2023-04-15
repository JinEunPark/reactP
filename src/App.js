import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

function App(props) {
  const expense = [
    { title: "newnew", amont: 123123, date: new Date(1234, 12, 12) },
    { title: "hi", amont: 123123, date: new Date(1234, 12, 12) },
    { title: "my", amont: 123123, date: new Date(1234, 12, 12) },
    { title: "LOVW🤔", amont: 123123, date: new Date(1234, 12, 12) },
  ];
  return (
    <div>
      <NewExpense></NewExpense>
      <Expenses item = {expense}/>
    </div>
  );
}

export default App; //export component
//대문자로 시작하는 것은 컴포넌트 클래스 이름
//소문자면 태그임
