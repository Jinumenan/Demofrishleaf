import express from "express"   
import{CreateDetails,getAllDetails,updateDetailsById,deleteDetailsById} from '../Controller/DetailsController.js'

const router = express.Router();


router.post('/details', CreateDetails);
router.get('/detailsget', getAllDetails);
router.put('/details/:id', updateDetailsById);
router.delete('/details/:id', deleteDetailsById);

export default router;  

