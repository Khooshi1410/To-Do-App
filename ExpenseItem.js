import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import '../UI/Card';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const click = () => {
    setTitle('Updated!');
    console.log(title);
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2></div>
            <div className="expense-item__price">${props.amount}</div>
            <button onClick={click}>Click here</button>
        </Card>
    );
}
export default ExpenseItem;