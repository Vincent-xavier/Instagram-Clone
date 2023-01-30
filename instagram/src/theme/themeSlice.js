import { createAsyncThunk, createSlice, unwrapResult } from "@reduxjs/toolkit";

export const fakeApi = createAsyncThunk("getDataFromApi", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
  return response;
});

const initialState = {
  appMode: "light",
  test: "",
  isLoading: false,
  data: [],
};
const themeSlice = createSlice({
  initialState,
  name: "Global Mode",
  reducers: {
    switchToDarkMode: (state, action) => {
      state.appMode = "dark";
      state.test = action.payload;
    },
    switchToLightMode() {
      initialState.appMode = "light";
    },
  },
  extraReducers: (buider) => {
    buider.addCase(fakeApi.pending, (state) => {
      state.isLoading = true;
      state.status = "loading";
    });
    buider.addCase(fakeApi.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.data = payload;
      state.status = "Success";
    });
    buider.addCase(fakeApi.rejected, (state, action) => {
      state.isLoading = false;
      state.status = "failed";
      state.error = action.error;
    });
  },
});

export const { switchToDarkMode, switchToLightMode } = themeSlice.actions;
export default themeSlice.reducer;
