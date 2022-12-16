import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
// any global state will go in this object
const initialState = {
    transactions: [
        //   { id: 1, text: 'Flower', amount: -20 },
        //   { id: 2, text: 'Salary', amount: 300 },
        //   { id: 3, text: 'Book', amount: -10 },
        //   { id: 4, text: 'Camera', amount: 150 }
        ]
};

// Create global context
// initialize and export GlobalContext because we want to bring it into/use it in other components/files 
export const GlobalContext = createContext(initialState); 

// Provider component
export const GlobalProvider = ({ children }) => {
    //useReducer accepts the reducer function and initialState, and returns the current state and a dispatch method
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions 
    // makes calls to reducer
    // takes in id because we need to know which one to delete
    function deleteTransaction(id) {
        // dispatch actions(an object) to the reducer and trigger state changes to the store using the dispatch method
        dispatch({
            type: 'DELETE_TRANSACTION',
            // any data we want to send to it
            payload: id
        });
    }

    // takes in the entire transaction
    function addTransaction(transaction) {
        // dispatch actions(an object) to the reducer and trigger state changes to the store using the dispatch method
        dispatch({
            type: 'ADD_TRANSACTION',
            // any data we want to send to it
            payload: transaction
        });
    }

    // for other components to access to our global state, we have to wrap our components in a provider component.
    // provider provides state/actions to whatever components its wrapped around
    return (<GlobalContext.Provider value={{
        // we can access transactions from any component that we requested using useContext
        transactions:state.transactions, 
        // to use actions, we have to pass it down to provider like the transactions.
        // now we should be able to pull them out just like transactions
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}