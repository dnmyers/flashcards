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
                name: "name of topic",
                icon: "icon url",
            },
        ],
    },
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics.push({ id, name, icon });
        },
    },
    extraReducers: {},
});

export const selectTopics = state => state.topics.topics;