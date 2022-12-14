import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

function NewExpense(props){
    const saveExpenseDataHandler = (enteredExpenseData) => {
            const expenseData = {
                ...enteredExpenseData,
                id: Math.ceil(Math.random() * 100).toString()
            };
            props.onNewExpense(expenseData);
    }

    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;