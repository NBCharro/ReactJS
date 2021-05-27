import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesLists from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = props => {
    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());
    const filterChangesHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.expenses.filter(expense => {
        return (
            expense.date.getFullYear().toString() === filteredYear.toString()
        );
    });

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onSaveFilter={filterChangesHandler}
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesLists items={filteredExpenses} />
        </Card>
    );
};

export default Expenses;
