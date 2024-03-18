import { createSlice } from "@reduxjs/toolkit";

const initialstate={
    items: [],

};
export const cartslice =createSlice({
    name : 'cart',
    initialstate,
    reducers: {
        addtocart: (state, action)=>{
            state.items.push(action.payload);
        },
        removefromcart: (state, action)=>{
            state.items=state.items.filter(item=>item.id !==action.payload.id);

        },
        clearcart:state=>{
            state.items =[];
        }
    }

})