const Item = require("../../models/items")
const Favorite=require("../../models/favorites")
// const {addTofav}=require("./../../helpers/joiSchemas")
const addToFavorite=async(req,res)=>{
 
const {itemId}=req.params
const{id:owner}=req.user
const item=await Item.findOne({_id:itemId})
console.log(item)
if(!item)
{
    throw new Error(`There isn't item with id ${itemId}`)
}
const {name,price,image}=item
const fav=await Favorite.findOne({owner,itemId})
if(fav)
{
    throw new Error("This item was already added to favorites")
}
await Favorite.create({itemId,owner,name,price,image})
res.status(200).json({message:`${item.name} was successfully added to favorites`})

}
module.exports=addToFavorite