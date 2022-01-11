import express from "express";

import { index, show, store, update, destroy } from "../controllers/users.js";

const router = express.Router();

router.get('/', index);
router.post('/', store);
router.get('/:id', show);
router.delete('/:id', destroy);
router.patch('/:id', update);

export default router;