import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from '../../cartItems'

const initialState = {
    cartItems: [],
    amount: 1,
    total: 0,
    isLoading: true,

}
const url = 'https://www.course-api.com/react-useReducer-cart-project';


export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
    return fetch(url)
        .then((resp) => resp.json())
        .catch((err) => console.log(err));
});


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
        calculateTotal: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;

            })
            state.amount = amount
            state.total = total
        }

    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true;
        },
        [getCartItems.fulfilled]: (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.cartItems = action.payload;
        },
        [getCartItems.rejected]: (state) => {
            state.isLoading = false;
        },
    }
})
export const { clearCart, removeItem, increaseAmount, decreaseAmount, calculateTotal } = cartSlice.actions
export default cartSlice.reducer