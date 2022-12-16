import React, { useContext } from 'react'
//bring in global context
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  // useContext allows us to access global context/state in all components
  // pulls out stuff from our global state using destructuring
  const { transactions } = useContext(GlobalContext);
  // Get Total Balance
  // map through to get the amounts into an array
  // to get the total, use reduce to add them all together and use toFixed to get 2 decimal places.
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  )
}

export default Balance
