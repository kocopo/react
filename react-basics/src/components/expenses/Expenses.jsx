import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
function Expenses(props){
    const expenses = props.expenses;
    const expenseRows = [];
    for(let i = 0; i < expenses.length; i++){
        expenseRows.push(<ExpenseItem 
            amount={expenses[i].amount} 
            title={expenses[i].title} 
            date={expenses[i].date} />);
    }
    const [filteredYear, setFilteredYear] = useState('2021');
    const handleFilterChange = (year) =>
    {
        setFilteredYear(year);
        console.log(year);
    }

    return(
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChange={handleFilterChange}/>
                {expenseRows}
            </Card>
        </div>

    );
}

export default Expenses;