import React, { useState } from "react";
import "./ExpenseForm.css";

//https://nachwon.github.io/How_to_use_emmet/
//Emmet
const ExpenseFrom = (props) => {

  const submitHandler = (event) => {

    event.preventDefault();

    const expenseData = {
      title: changedTitle,
      amount: changeAmount,
      date: new Date(changedDate),
    };

    props.onSaveExpenseData(expenseData);
    setChangedTitle('');
    setChangeAmount('');
    setChangedDate('');
  };


  const [changedTitle, setChangedTitle] = useState(""); //변경되 제목을 저장하기 위해서 사용함
  const [changedDate, setChangedDate] = useState(""); //숫자도 문자열로 들어오기 때문에 문자열로 초기화함.
  const [changeAmount, setChangeAmount] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     changedTitle: "",
  //     changedAmount: "",
  //     changedDate: "",
  //   });

  const titleChangeFucntion = (event) => {
    setChangedTitle(event.target.value);
    //title이 바뀔때 마다 실행됨 이벤트 객체를 받아서 입력된 값을 콘솔에 출력함.
    // setUserInput({...userInput, changedTitle:event.target.value});//객체의 property를 update 함 spread를 사용해서
  };

  const dateChangeHandler = (event) => {
    setChangedDate(event.target.value);
    // setUserInput({...userInput, changedAmount:event.target.value});
  };
  const amountChangeHandler = (event) => {
    setChangeAmount(event.target.value);
    // setUserInput({...userInput, changedDate:event.target.value});
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" onChange={titleChangeFucntion} />
        </div>
        <div className="new-expense__controls">
          <label>amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__controls">
          <label>date</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2024-12-31"
          />
        </div>
      </div>
      <div className="new-expense__action">
        <button type="submit">add expense</button>
      </div>
    </form>
  );
};
export default ExpenseFrom;
