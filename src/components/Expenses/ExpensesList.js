import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found!!</h2>;
    } //조건에 따라서 전혀 다르 컴포넌트가 반환되게 만듦

    return (
        <ul className="expense-list">
        {props.items.map((expense) => (
            <ExpenseItem
            key={expense.id} //키값을 추가함 리액트가 인식하게 만듦 없으면 오류가 발생함.
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
        ))};//
        </ul>
    );
  }

export default ExpensesList;
