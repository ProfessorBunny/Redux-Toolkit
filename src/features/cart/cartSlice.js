import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems'

const initialState = {
    cartItems: cartItems,
    amount: 1,
    total: 0,
    isLoading: true,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        removeItem: (state, action) => {
            const itemID = action.payload
            state.cartItems = state.cartItems.filter((item) => item.id !== itemID)
        },
        increaseAmount: (state, action) => {
            const itemID = action.payload
            const increasedItem = state.cartItems.find((item) => item.id === itemID)
            increasedItem.amount = increasedItem.amount + 1
        },
        decreaseAmount: (state, action) => {
            const itemID = action.payload
            const decreasedItem = state.cartItems.find((item) => item.id === itemID)
            decreasedItem.amount = decreasedItem.amount - 1
        },

    }
})
export const { clearCart, removeItem, increaseAmount, decreaseAmount } = cartSlice.actions
export default cartSlice.reducer