import React, { useState } from 'react'
const ExpenseForm = ({ setExpenses }) => {
  const [title, setTitle] = useState('Book')
  const [category, setCategory] = useState('')
  const[amount,setAmount]=useState('')

  const submithandler = (e) => {
    e.preventDefault()
    const expense={title,category,amount,id:crypto.randomUUID()}
    setExpenses((prevstate)=>[...prevstate,expense])
    e.target.reset()


  }

  console.log(title)
  console.log(category)
  return (
    <form className="expense-form" onSubmit={submithandler}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input id="title" name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select id='category' name='category' value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="" hidden>Category</option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input id="amount" name='amount'value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <button className="add-btn">Add</button>
    </form>
  )
}

export default ExpenseForm
