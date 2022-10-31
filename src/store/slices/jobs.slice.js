import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {dataService} from "../../services";


export const getAllJobs = createAsyncThunk(
    'jobsSlice/getAllJobs',

    async (_, {rejectWithValue}) => {
        try {
            const jobsA = await dataService.getAllData();
            console.log(jobsA);
            return jobsA
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const initialState = {
    jobsArr: [],
    status: null,
    error: null,
}

const jobsSlice = createSlice({
    name: 'jobsSlice',

    initialState,

    reducers: {},

    extraReducers: {
        [getAllJobs.pending]: (state, action) => {
            state.status = "Loading..."
            state.error = null
        },

        [getAllJobs.fulfilled]: (state, action) => {
            state.status = "fulfilled"
            state.jobsArr = action.payload
        },

        [getAllJobs.rejected]: (state, action) => {
            state.status = "rejected"
            state.error = action.payload
        }
    }

});

const jobsReducer = jobsSlice.reducer;
export default jobsReducer;