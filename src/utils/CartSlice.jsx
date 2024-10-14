import { createSlice } from "@reduxjs/toolkit";


const cartItems = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItems: (state, action)=>{
            state.items.push(action.payload);
        },
        removeItems: (state)=>{
            state.items.pop();
        },
        clearCart: (state)=>{
            state.items.length = 0;
            // return {items: []};
        }
    }
});

export const {addItems, removeItems, clearCart}  = cartItems.actions;
export default cartItems.reducer;