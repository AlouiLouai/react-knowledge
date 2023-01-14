import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
import item from "../mocks/items"

const initialState = {
    items: item,
    itemId: 0
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

    const setItemId = (id) => {
        dispatch({
            type: 'SET_ITEM_ID',
            payload: id
        })
    }

    return (
        <GlobalContext.Provider value={{
            items: state.items,
            itemId: state.itemId,
            removeItem,
            addItem,
            editItem,
            setItemId
        }}>
            {children}
        </GlobalContext.Provider>
    )
}