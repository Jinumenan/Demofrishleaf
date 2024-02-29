import express from "express"   
import{Register} from '../Controller/AuthController.js'

const router = express.Router();

router.post("/Register", Register);
export default router;  