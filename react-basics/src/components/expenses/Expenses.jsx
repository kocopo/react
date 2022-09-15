import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
function Expenses(props){
    const expenses = props.expenses;
    const expenseRows = [];
    for(let i = 0; i < expenses.length; i++){
        expenseRows.push(<ExpenseItem 
            amount={expenses[i].amount} 
            title={expenses[i].title} 
            date={expenses[i].date} />);
    }

    return(
<Card className='expenses'>
    {expenseRows}
</Card>
    );
}

export default Expenses;