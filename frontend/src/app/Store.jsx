import {configureStore} from '@reduxjs/toolkit';
import BlogContentSlice from '../features/Blog Contents/BlogContentSlice';

const Store = configureStore({

    reducer: {

        blogContent: BlogContentSlice

    }

});

export default Store;