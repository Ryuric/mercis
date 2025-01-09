/** Libraries imports*/
import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

/** Custom imports */
import { dummy } from "../data/dummy";

/** Constants Initialization */
const DUMMY = dummy;

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY} />
    </View>
  );
}

/** Exports */
export default ExpensesOutput;
