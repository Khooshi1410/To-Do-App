import React, { useState } from 'react';
import './Expenses.css';
import '../UI/Card';
import Card from '../UI/Card';
import ExpensesFilter from '../NewExpenses/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
const [filteredYear, setFilteredtYear] = useState('2020')

  const filterChangeHandler = (selectedeYear) => {
   setFilteredtYear(selectedeYear);
  };
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

    return (
      <div>
        <li><Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
        </Card></li>
        </div>
      );
};

export default Expenses;