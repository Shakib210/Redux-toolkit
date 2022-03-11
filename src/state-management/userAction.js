import { createAction } from "@reduxjs/toolkit";

export const updateStatusAction= createAction('UPDATE_STATUS')

export const updateNameAction=()=>{
    return async(dispatch)=>{
        const res= await fetch(`https://jsonplaceholder.typicode.com/users`)
        const result= await res.json()
        dispatch({ type: "CHANGE_NAME", payload: result?.[0]?.name });
    }
}