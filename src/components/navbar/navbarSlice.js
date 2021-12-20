import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : [],
    status : null,
}

export const getuser= createAsyncThunk()

const NavbarSlice = createSlice({
    name:"navbar",
    initialState,
    reducers : {
        getsomething: (state) => {

        }
    },
    extraReducers: {
        [getuser.pending]: (state)=>{
            state.status = "loading";
        },
        [getuser.fulfilled]: (state,{payload}) =>{
            state.user = payload
            state.status = "success"
        },
        [getuser.rejected]: (state) =>{
            state.status = "failed"
        }
    }
})
export const {getsomething} = NavbarSlice.actions;
export default NavbarSlice.reducer;