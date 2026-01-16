import express from 'express';
import getRouterController from '../controllers/getRouterController.js'; // initalize the getRouterController

const router = express.Router();

router.get('/', getRouterController.getBlogRootRouter); // GET Blog Root Router
router.get('/api/allblogs/content', getRouterController.getAllBlogsRouter); // GET All Blog Router

export default router;