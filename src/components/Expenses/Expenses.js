
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter'
import react, {useState} from 'react'
import Card from "../UI/Card";
function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('2020')
  
  const filterChangeHandler = selectYear => {
    setSelectedYear(selectYear);
    
  }

  return (
    <Card className='expenses'>
      <ExpenseFilter selected = {selectedYear} onfilterChanged = {filterChangeHandler}></ExpenseFilter>
      {
        props.item.map((expense) => (<ExpenseItem title = {expense.title} amoumt = {expense.amoumt} date = {expense.date}></ExpenseItem>))
      }
    </Card>
  );

  
}

export default Expenses