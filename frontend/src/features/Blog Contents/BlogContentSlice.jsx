import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

/** Fetch Blogs Randomly */
export const fetchAllBlogContents = createAsyncThunk('blogContent/fetchAllBlogContents', async() => {

    const response = await axios.get('https://daily-blog-armf.onrender.com/api/allblogs/content');
    return response.data;

});

const BlogContentSlice = createSlice({

    name: 'blogContent',
    initialState: {

        items: [],
        status: 'idle'

    },
    extraReducers: (builder) => {

        builder.addCase(fetchAllBlogContents.pending, (state) => {

            state.status = 'loading'

        }).addCase(fetchAllBlogContents.fulfilled, (state, action) => {

            state.status = 'succeeded',
            state.items = action.payload

        }).addCase(fetchAllBlogContents.rejected, (state) => {

            state.status = 'failed'

        });

    }

});

export default BlogContentSlice.reducer;