import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { getJobs } from "../../../api/jobs";

const jobsAdapter = createEntityAdapter();

const initialState = jobsAdapter.getInitialState();

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const response = await getJobs();

  return response;
});

// Create a redux slice for jobs
const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    //
  },
  extraReducers: {
    [fetchJobs.fulfilled]: jobsAdapter.setAll,
  },
});

export default jobsSlice.reducer;
