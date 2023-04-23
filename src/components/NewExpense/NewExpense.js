import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import React, { useState } from "react";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);//사용자의 편집 여부를 저장할 수 있는 state 선언 

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    //child component 에서 실행할 함수를 만들어서 전달함.
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {//사용자가 변경 버튼을 누르면 변경될 것임
    setIsEditing(true);
  };

  const stopEditingHandler = () => {//사용자가 켄슬 버튼을 누르면 변경될것음
    console.log('cancel!!')
    setIsEditing(false);
  };

  return (
    //이렇게 전달하면 자식 component 에서 props 를 통해서 handler 에 접근하는 것이 가능하다.
    <div className="new-expense">
      {isEditing && (
        <ExpenseForm
          onCancel={stopEditingHandler}
          onSaveExpenseData={onSaveExpenseDataHandler}
        />
      )}
      {!isEditing && (
        <button onClick={startEditingHandler}>ADD NEW EXPENSE</button>
      )}
    </div>
  );
};
export default NewExpense;
