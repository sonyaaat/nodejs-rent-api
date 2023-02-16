const User = require("../../models/users");
const bcrypt = require("bcryptjs");
const { registerSchema } = require("../../helpers/joiSchemas");
const register = async (req, res) => {
  const { error } = registerSchema.validate(req.body);
  if (error) {
    return res.status(404).json({ message: error.message });
  }
  const { email, password,role="user" } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Error(`User with email ${email}  already exists`);
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  await User.create({
    email,
    password: hashPassword,
    role
  });
  res.status(201).json({ user: email ,role});
};
module.exports = register;
