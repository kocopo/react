import './ExpenseItem.css'

function ExpenseItem() {
const expenseDate = new Date(2021, 2, 27);
const expenseTitle = 'Card Insurance';
const expenseAmount = 7500;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}Kč</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
