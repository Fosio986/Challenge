import React from "react";
import { ExpenseProvider } from "./context/ExpenseContext";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import TotalExpense from "./components/ExpenseTotal";
import CategoryTotal from "./components/CategoryTotal";
import "./App.css"

function App() {
  return (
    <ExpenseProvider>
      <div>
        <h1>Gestion des Dépenses Personnelles</h1>
        <ExpenseForm />
        <TotalExpense />
        <CategoryTotal /> 
        <ExpenseList />
      </div>
    </ExpenseProvider>
  );
}

export default App;