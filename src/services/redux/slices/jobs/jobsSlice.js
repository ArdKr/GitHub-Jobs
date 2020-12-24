import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { getJobs } from "../../../api/jobs";

const jobsAdapter = createEntityAdapter();

const initialState = jobsAdapter.getInitialState({
  status: "",
  error: null,
});

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async (params = {}, thunkAPI) => {
    const response = await getJobs(params);

    return response;
  }
);

// Create a redux slice for jobs
const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    updateJobs: (state, action) => {
      jobsAdapter.setAll(state, action.payload);
    },
  },
  extraReducers: {
    [fetchJobs.fulfilled]: (state, action) => {
      jobsAdapter.setAll(state, action.payload);
      // jobsAdapter.upsertMany(state, action.payload);
      state.status = "finished";
    },
    [fetchJobs.pending]: (state) => {
      state.status = "loading";
    },
    [fetchJobs.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    },
  },
});

export const { selectAll: selectAllJobs } = jobsAdapter.getSelectors(
  (state) => state.jobs
);

export const { updateJobs } = jobsSlice.actions;

export default jobsSlice.reducer;
