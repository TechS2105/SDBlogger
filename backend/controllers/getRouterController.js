import allBlogs from '../APIs/blog.js';

/** Blog Root Router */
const getBlogRootRouter = (req, res) => {

    res.status(200).json({message: "Server is running successfully..."});

}

/** All Blogs Root Router */
const getAllBlogsRouter = (req, res) => {

    res.status(200).json(allBlogs);

}

export default {

    getBlogRootRouter,
    getAllBlogsRouter

}