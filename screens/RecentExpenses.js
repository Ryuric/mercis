/** Libraries imports */
import { useContext } from "react";

/** Custom imports */
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/context";
import { getDateMinusDays } from "../utils/date";

function RecentExpenses() {
  const expensesContext = useContext(ExpensesContext);
  const recentExpenses = expensesContext.expenses.filter((expense) => {
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);

    return expense.date > date7daysAgo;
  });
  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" />
  );
}

export default RecentExpenses;
