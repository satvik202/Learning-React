import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : []
    },
    reducers : {
        addItem : (state, action)=> {
            state.items.push(action.payload);
        },
        removeItem : (state, action)=>{
            const id  = action.payload.card.info.id
            let index = state.items.findIndex(item =>item.card.info.id === id);
            if(index!=-1)
            state.items.splice(index, 1)
            // state.items.pop();
        },
        clearCart : (state)=>{
            state.items.length=0
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions
export default  cartSlice.reducer