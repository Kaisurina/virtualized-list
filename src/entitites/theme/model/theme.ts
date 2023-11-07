import { PaletteMode } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

export interface IThemeState {
  mode: PaletteMode;
}

const initialState: IThemeState = {
  mode: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeSwitch(state) {
      if (state.mode === "dark") {
        state.mode = "light";
      } else {
        state.mode = "dark";
      }
    },
  },
});

export const { themeSwitch } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
