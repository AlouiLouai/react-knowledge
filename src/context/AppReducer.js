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
            const items = state.items.map(x => {
                if(x.id === updatedItem.id){
                    return updatedItem
                }
                return x
            })
            return {
                ...state,
                items: items
            }
        default:
            return state
    }
}