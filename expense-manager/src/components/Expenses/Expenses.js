import { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [ filteredYear, setfilteredYear ] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setfilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter((expense) => expense.date.getFullYear().toString() === filteredYear);

    return (
        <Card className='expenses'>
            <ExpensesFilter onChangeFilter={filterChangeHandler} year={filteredYear}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;