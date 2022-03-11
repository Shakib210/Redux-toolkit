import { createReducer } from "@reduxjs/toolkit";
import { updateStatusAction } from "./userAction";

const initialData = {
  name: "Shakib",
  age: "25",
  status: 'Single',
  count: 0,
};

// export default (state = initialData, action) => {
//   if (action.type == "INCREASE_COUNT") {
//     return { ...state, count: action.payload };
//   }
//   return state;
// };


export default createReducer(initialData, (builder) => {
       builder.addCase('INCREASE_COUNT', (state, action) => {
           state.count= action.payload
       })

       builder.addCase('CHANGE_NAME', (state, action) => {
        state.name= action.payload
    })

    builder.addCase(updateStatusAction, (state, action) => {
      state.status= action.payload
  })
})