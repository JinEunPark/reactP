import ExpenseForm from './ExpenseForm'
import './NewExpense.css'


const NewExpense = (props) =>{

    const onSaveExpenseDataHandler = (enteredExpenseData) =>{ //child component 에서 실행할 함수를 만들어서 전달함.
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData)
    }

    return(//이렇게 전달하면 자식 component 에서 props 를 통해서 handler 에 접근하는 것이 가능하다.
        <div className="new-expense">
         <ExpenseForm onSaveExpenseData = {onSaveExpenseDataHandler} />
        </div>
    );
}
export default NewExpense;