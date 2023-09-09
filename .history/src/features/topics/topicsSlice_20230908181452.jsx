import {
    createSlice,
} from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: [
            {
                id: "123456",
                name: "name of topic",
                icon: "icon url",
                quizIds: [],
            },
        ],
    },
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            const quizIds = [];
            state.topics.push({ id, name, icon, quizIds });
        },
        addQuizId: (state, action) => {
            const { id, name, topicId, cardIds } = action.payload;
            state.topics[topicId].quizIds.push( id );
        }
    },
});

export const selectTopics = state => state.topics.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;