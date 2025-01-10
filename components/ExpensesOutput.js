/** Libraries imports*/
import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

/** Custom imports */
import { dummy } from "../data/dummy";
import { GlobalStyles } from "../constants/styles";

/** Constants Initialization */
const DUMMY = dummy;

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY} />
    </View>
  );
}

/** Exports */
export default ExpensesOutput;

/** Styles */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.accent500,
  },
});
