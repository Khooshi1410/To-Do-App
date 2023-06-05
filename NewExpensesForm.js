import React, {useState} from "react";
import './NewExpensesForm.css';

const NewExpensesForm = (props) => {
    const [enteredTitle, setentertedTitle] = useState('');
    const [enteredAmount, setenteredAmount] = useState('');
    const [enteredDate, setenteredDate] = useState('');

    const titleChangehandler = (event) => {
        setentertedTitle(event.target.value);
    }
    const amountChangehandler = (event) => {
        setenteredAmount(event.target.value);
    }
    const dateChangehandler = (event) => {
        setenteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setentertedTitle('');
        setenteredAmount('');
        setenteredDate('');
    };
    return <form onSubmit={submitHandler}>
        <div className="new-expense__control">
        <div className="new-expense__control">
        <label>Title</label>
        <input 
        type="text" 
        value={enteredTitle} 
        onChange={titleChangehandler}/>
        </div>
        <div className="new-expense__control">
        <label>Amount</label>
        <input 
        type="number" 
        min="0.01" 
        max="" 
        value={enteredAmount} 
        onChange={amountChangehandler}/>
        </div>
        <div className="new-expense__control">
        <label>Date</label>
        <input 
        type="date" 
        min="2019-01-01" 
        max="2022-12-31" 
        value={enteredDate} 
        onChange={dateChangehandler}/>
        </div>
    </div>
    <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
    </div>
    </form>
}
export default NewExpensesForm;