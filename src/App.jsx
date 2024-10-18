
import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import Expensedata from '../Expensedata'
// import ContextMenu from './components/ContextMenu'

function App() {

const[expenses,setExpenses]=useState(Expensedata)
  return (
    <>
       <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm setExpenses={setExpenses} />
        <ExpenseTable expenses={expenses} />
        {/* <ContextMenu /> */}
      </div>
    </main>
    </>
  )
}

export default App
