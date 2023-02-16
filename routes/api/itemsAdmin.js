const express = require('express')

const router = express.Router()
const auth=require("../../middlewares/auth")
const ctrlWrapper=require("../../middlewares/ctrlWrapper")
const {getAllByAdmin,add,getById,deleteById,updateById,updateFavorite}=require("../../controllers/items/index")
const upload=require("../../middlewares/multer")

router.get('/',auth,ctrlWrapper(getAllByAdmin) )

router.get('/:itemId',auth,ctrlWrapper(getById))

router.post('/',auth,upload.single("image"),ctrlWrapper(add) )

router.delete('/:itemId', auth,ctrlWrapper(deleteById))

router.put('/:itemId',auth,ctrlWrapper(updateById) )

router.patch("/:itemId/favorite",auth,ctrlWrapper(updateFavorite))
module.exports = router
