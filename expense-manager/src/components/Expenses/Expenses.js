import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    const [ filteredYear, setfilteredYear ] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setfilteredYear(selectedYear);
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter onChangeFilter={filterChangeHandler} year={filteredYear}/>
            {props.expenses && props.expenses.map((expense) => {
                return (
                    <ExpenseItem
                        key={expense.id}
                        date={expense.date}
                        title={expense.title}
                        amount={expense.amount} />
                );
            })}
        </Card>
    );
}

export default Expenses;