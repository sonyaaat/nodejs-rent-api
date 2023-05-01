const express = require('express')

const router = express.Router()
const auth=require("../../middlewares/auth")
const ctrlWrapper=require("../../middlewares/ctrlWrapper")
const {add,deleteById,updateById}=require("../../controllers/items/index")
const upload=require("../../middlewares/multer")





router.post('/',auth,upload.single("image"),ctrlWrapper(add) )

router.delete('/:itemId', auth,ctrlWrapper(deleteById))

router.put('/:itemId',auth,ctrlWrapper(updateById) )


module.exports = router
