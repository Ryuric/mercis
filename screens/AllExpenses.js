/** Libraries imports */
import { useContext } from "react";

/** Custom imports */
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/context";

function AllExpenses() {
  const expensesContext = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expensesContext.expenses}
      expensesPeriod="Total"
    />
  );
}

export default AllExpenses;
