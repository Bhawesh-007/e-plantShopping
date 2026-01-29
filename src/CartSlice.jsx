import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';



export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  
  reducers: {
    addItem: (state, action) => {
           const {name , image , cost } = action.payload;
            //first i have to check wheter this exists in store or not
           const exists = state.items.find((item)=>item.name===name);
           if(!exists)state.items.push({name,image,cost,quantity:1});
           else {
             exists.quantity++;
           }

          

    },
    removeItem: (state, action) => {
      const {name} = action.payload;
      state.items = state.items.filter((item)=>item.name!==name);
    },
   updateQuantity: (state, action) => {
    const { name, quantity } = action.payload;

    const item = state.items.find(item => item.name === name);
    if (item) {
        item.quantity = quantity;
    }
  },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
