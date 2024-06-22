import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'filters',
    initialState: {
        name: "",
        number: "",
     },
    reducers: {
        changeFilterByName: {
            reducer(state, action) {
            state.name = action.payload
            }
        },
        changeFilterByNumber: {
            reducer(state, action) {
            state.number = action.payload
            }
        }
    }
})

export const { changeFilterByName, changeFilterByNumber } = slice.actions;
export default slice.reducer;