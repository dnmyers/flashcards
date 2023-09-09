import { configureStore } from "@reduxjs/toolkit";

import { topicsSlice } from "../features/topics/topicsSlice";
import { quizzesSlice } from "../features/quizzes/quizzesSlice";
import { cardsSlice } from "../features/cards/cardsSlice";

const store = configureStore({
    reducer: {
        topics: topicsSlice.reducer,
        quizzes: quizzesSlice.reducer,
        cards: cardsSlice.reducer,
    },
});

export default store;