import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { changeLanguage } from "i18next";

const lang:string[] = ["ko", "en"];
export const defaultLang = lang[0];

const langReducer = createSlice({
    name: "langChange",
    initialState: defaultLang,
    reducers: {
        change: (_state:string, action) => {
            changeLanguage(lang[+action.payload]);
            return lang[+action.payload];
}}});

const pageReducer = createSlice({
    name: "pageReducer",
    initialState: 0,
    reducers: {
        get: (state:number) => {
            return state;
        },
        set: (_state:number, action:PayloadAction<number>) => {
            return action.payload;
        }
    }
})

const store = configureStore({ 
    reducer: {
        langReducer: langReducer.reducer,
        pageReducer: pageReducer.reducer
    }
});

export const { change } = langReducer.actions;
export const { get, set } = pageReducer.actions;

export default store;