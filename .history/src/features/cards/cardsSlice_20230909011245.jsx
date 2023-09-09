import {
    createSlice
} from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
    name: "cards",
    initialState: {
        cards: {},
    },
    reducers: {
        addCard: (state, action) => {
            const { id, front, back } = action.payload;
            state.cards[id] = {
                id,
                front,
                back,
            };
        },
    },
});

export const selectCards = state => state.cards.cards;
export const selectCard = (state, cardId) => state.cards.cards[cardId];
export const { addCard } = cardsSlice.actions;

export default cardsSlice.reducer;