export default (state, action) => {
    switch (action.type) {
        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter(item => {
                    return item.id !== action.payload
                })
            }
        case 'ADD_ITEM':
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        case 'UPDATE_ITEM':
            const updatedItem = action.payload
            const newItems = state.items.map(item => {
                if (item.id === updatedItem.id) {
                    return updatedItem
                }
                return item
            })
            return {
                ...state,
                items: newItems
            }
        case 'SET_ITEM_ID':
            return {
                ...state,
                itemId: action.payload
            }

        default:
            return state
    }
}