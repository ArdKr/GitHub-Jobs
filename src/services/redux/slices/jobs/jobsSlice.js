import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const jobsAdapter = createEntityAdapter();

const initialState = jobsAdapter.getInitialState();

// Create a redux slice for jobs
const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    //
  },
});

export default jobsSlice.reducer;
