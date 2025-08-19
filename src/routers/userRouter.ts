import { Hono } from "hono";
import { create, list } from "../controllers/userController.js";


const userRouter = new Hono()

userRouter.post('/create', create)
userRouter.get('/list', list)

export default userRouter