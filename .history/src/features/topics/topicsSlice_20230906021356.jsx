import {
    createSlice,
} from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topic: [
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
});

export const selectTopics = state => state.topics.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;