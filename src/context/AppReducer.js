import React from 'react'

//reducer is how we specify application state changes in response to certain actions to our context/store.
// reducer is a way to change state and send it down to your components
// cannot simply change it, we have to create a new state and send it down
export default (state, action) => { 
  // check action type
  switch(action.type) {
    // run this
    case 'DELETE_TRANSACTION':
      // cannot simply change state, we have to create a new state and send it down  
      return {
        //use spread operator and send current state
        ...state,
        // want to change transacions value,
        //so send down all transactions except for the one that was deleted using id sent to the payload
        // when we did the dispatch in GlobalState, we dispatch action with a type and a payload
        //type=DELETE_TRANSACTION, payload=id
        // filter out anything that has that id since this is a delete
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
      case 'ADD_TRANSACTION':
        return {
          //return initial state
          ...state,
          // return the transactions that are already there including the one that is in the payload
          transactions: [action.payload, ...state.transactions]
        }
    default:
      return state;
  }
}
