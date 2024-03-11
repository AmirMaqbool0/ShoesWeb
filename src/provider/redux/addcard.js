import { createSlice } from "@reduxjs/toolkit";

 const addcart = createSlice({
    name: 'addcart',
    initialState: {
        card: [],
        quantity: 0
    },
    reducers: {
        addtocart: (state, action) => {
            const find=state.card.findIndex(data => data.id === action.payload.id);
        if(find>=0)
            state.card[find].quantity +=1;
        else{
            const tem={...action.payload,quantity: 1}
            state.card.push(tem)
        }
           
        }
    }
});

export const { addtocart } = addcart.actions;
export default  addcart.reducer
