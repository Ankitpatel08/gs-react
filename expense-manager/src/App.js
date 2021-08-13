import React from 'react';
import PropTypes from 'prop-types';
import ExpenseItem from './components/ExpenseItem';

function App() {
    return (
        <div>
            <ExpenseItem></ExpenseItem>
        </div>
    );
}

App.propTypes = {
    title: PropTypes.string,
};

export default App;
