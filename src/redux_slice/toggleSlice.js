import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false
}

const toggleSlice = createSlice(
    {
        name : "toggle",
        initialState,
        reducers : {
            isDisplay : (state) =>{
                state.status = !state.status
            }
        }
    }
);      

export const {isDisplay} = toggleSlice.actions;
export default toggleSlice.reducer;