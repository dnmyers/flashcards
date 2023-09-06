import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {},
    },
    reducers: {},
    extraReducers: {},
});