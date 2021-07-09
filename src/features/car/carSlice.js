import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars:[ "game.jpg", "connected.jpg", "audio.jpg", "fourth.jpg" ],
}

const carSlice = createSlice({
    name:"car",
    initialState,
    reducers:{}
})

export const selectCars = state=> state.car.cars;

export default carSlice.reducer;