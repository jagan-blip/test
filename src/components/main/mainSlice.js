import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

const initialState = {
    weather : [],
    status : null,
}
export const getweather  = createAsyncThunk("weather/getweather", async(obj) => {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=64fc1ddf3ab2495fb42132558213110&q=${obj.city}&aqi=no`,{
        headers:{
            'Content-Type' : 'application/json'
        }
    })
    const res = await response.json();
    return res;
})

const mainSlice = createSlice({
    name : "weather",
    initialState,
    reducers:{
        getsomething: (state) =>{

        },

    },
    extraReducers: {
        [getweather.pending]:(state) =>{
            state.status = "pending"
        },
        [getweather.fulfilled]: (state,{payload}) => {
            state.weather = payload
            state.status = "success"
        },
        [getweather.rejected]: (state) =>{
            state.status = "failed"
        }

    },
})
export const { getsomething  } = mainSlice.actions;
export default mainSlice.reducer;