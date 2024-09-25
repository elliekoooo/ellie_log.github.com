import { configureStore, createSlice } from "@reduxjs/toolkit";
import { changeLanguage } from "i18next";

export const lang:string[] = ["ko", "en"];

const myReducer = createSlice({
    name: "langChange",
    initialState: lang[1],
    reducers: {
        change: (_state:string, action) => {
            changeLanguage(lang[+action.payload]);
            return lang[+action.payload];
}}});

const store = configureStore({ 
    reducer: {
        myReducer: myReducer.reducer
    } 
});

export const { change } = myReducer.actions;
export default store;