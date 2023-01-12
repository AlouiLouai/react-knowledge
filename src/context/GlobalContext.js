import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
import item from "../mocks/items"

const initialState = {
    items: item
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions
    const removeItem = (id) => {
        dispatch({
            type: 'REMOVE_ITEM',
            payload: id
        })
    }
    const addItem = (user) => {
        dispatch({
            type: 'ADD_ITEM',
            payload: user
        })
    }
    const editItem = (user) => {
        dispatch({
            type: 'UPDATE_ITEM',
            payload: user
        })
    }

    return (
        <GlobalContext.Provider value={{
            items: state.items,
            removeItem,
            addItem,
            editItem,
            getItemById
        }}>
            {children}
        </GlobalContext.Provider>
    )
}