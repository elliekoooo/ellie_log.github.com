import { configureStore, createSlice } from "@reduxjs/toolkit";
import { changeLanguage } from "i18next";

const lang:string[] = ["ko", "en"];
export const defaultLang = lang[0];

const myReducer = createSlice({
    name: "langChange",
    initialState: defaultLang,
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