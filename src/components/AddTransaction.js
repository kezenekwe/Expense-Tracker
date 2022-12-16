import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    // useState accepts an initial state and returns two values: the current state, and a function that updates the state.
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);
    
    const onSubmit = e => {
      e.preventDefault();

      const newTransaction = {
        // generate rndm number for id
        id: Math.floor(Math.random() * 100000000),
        // text and amount is whatever is in the form
        // component level state hooked to the inputs, with the values text and amount, and passed into this object
        text,
        // parses amount to a number
        amount: +amount
      }

      // call addTransaction and pass in new transaction
      addTransaction(newTransaction);
    }

    return (
    <>
      <h3>Add new transaction</h3>
      {/* calls the onSubmit function on form submit */}
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          {/* For onChange, when the input value has been changed, it will update the state using setText*/}
          {/* we then set the state to whatever value the current event target is, that is, whatever we type in */}
          <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br />
            {/* (negative - expense, positive - income) */}
          </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
