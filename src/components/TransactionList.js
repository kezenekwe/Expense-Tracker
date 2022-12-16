// useContext accesses context 
import React, { useContext } from 'react'
// pulls in global state
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'

const TransactionList = () => {
  // useContext allows us to access global context/state in all components
  // pulls out state using destructuring
  const { transactions } = useContext(GlobalContext);
  
  return (
    <>
      <h3>History</h3>
      <ul className="list">
      {/* transactions is an array, so you need to map/loop through it and output/render each transaction as a seperate component */}
      {/* Need to know which specific transaction to render, so we need to pass in the transaction as a prop*/}
      {/* when you map through and output a list, you need a unique key, which is the transaction id */}
        {transactions.map(transaction => ( <Transaction key={transaction.id} transaction={transaction} />))}
      </ul> 
    </>
  )
}

export default TransactionList
