import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: [
            {
                id: "123456",

            }
        ]
    },
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics.push({ id, name, icon });
        },
    },
    extraReducers: {},
});