const Joi = require("joi");
const loginSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  password: Joi.string().min(5).max(50).required(),
});

const registerSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  password: Joi.string().min(5).max(50).required(),
  role: Joi.string().valid('user', 'admin'),
});



const updateItemsSchema=Joi.object({
  name: Joi.string().min(3).max(50),
  description: Joi.string().min(5).max(500),
  price: Joi.number(),
  quantity: Joi.number(),
  favorite: Joi.boolean(),
  owner: Joi.string(),
  // image: Joi.string(),
})

const favSchema = Joi.object({
  favorite: Joi.boolean().required(),
});
const addTofav=Joi.object({
  name: Joi.string().min(3).max(50).required(),
  price: Joi.number().required(),
  owner: Joi.string(),
   image:Joi.string()
})

const placeOrderSchema=Joi.object({
  itemId: Joi.string(),
  quantity:Joi.number(),
  // name: Joi.string().min(3).max(50).required(),
  // price: Joi.number().required(),
  creationDate:Joi.date(),
  owner: Joi.string(),
  status:Joi.string().valid('in progress','completed',"cancelled")
})
const editUserSchema=Joi.object({
firstName:Joi.string().required(),
lastName:Joi.string().required(),
username:Joi.string().required(),
address:Joi.string().required(),
country:Joi.string().required(),
city:Joi.string().required(),
postalCode:Joi.number().required(),

})
const carSchema=Joi.object({
  brand: Joi.string().required(),
  model: Joi.string().required(),
  year: Joi.string().required(),
  description: Joi.string().min(5).max(500).required(),
  price: Joi.number().required(),
  seats:Joi.number().required(),
  status:Joi.string().valid('available','unavailable')
  // image:
})
const rentCarSchema=Joi.object({
  itemId: Joi.string().required(),
  owner: Joi.string(),
  startDate:Joi.date().required(),
  endDate:Joi.date().required(),
  status:Joi.string().valid('cancelled','active')
})

module.exports = { loginSchema,registerSchema, addTofav ,updateItemsSchema,favSchema,placeOrderSchema,editUserSchema,rentCarSchema,carSchema};
