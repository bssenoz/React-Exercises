import { configureStore } from "@reduxjs/toolkit";
import Note from "./Note";
export const store = configureStore({
  reducer: {
    notes: Note,
  },
});