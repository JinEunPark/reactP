import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card";
import React,{useState} from 'react'

function ExpenseItem(props) {
  //react 에서는 하나의 component 만 반환행햐한다 따라서 하나의 태그로 감싸야함.

  // const onClickMethod = ()=>{
  //   console.log('hi')
  // }
  const [title, setTitle] = useState(props.title);// react hook 함수는 반드시 component 함수 내부에서 구현 되어야 한다 컴포넌트 내부의 중첩 함수 에서도 실행하면 동작하지 않는다.

  function onClickMethod(){
    setTitle('update!!!')
    console.log('hi')
  };

  return (

    <Card className="expense-item">
      <ExpenseDate date = {props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price"> ${props.amount} </div>
      </div>
      <button onClick = {onClickMethod}>click!!</button>       { /* 함수형 포인터를 전달해야 함수가 랜더링과정에서 수행되지 않는다 꼭 함수형 포인터를 전달해야한다. */ }

    </Card>
  );
}
export default ExpenseItem;
