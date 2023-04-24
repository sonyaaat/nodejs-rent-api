const bcrypt = require("bcryptjs");
const { loginSchema } = require("../../helpers/joiSchemas");
const User = require("../../models/users");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const { SECRET_KEY } = process.env;

const login = async (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  console.log(req.body)
  if (error) {
    
    return res.status(404).json({ message: error.message });
  }
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error(`Email or password is wrong`);
  }
  const { password: userPassword } = user;
  const passCompare = bcrypt.compareSync(password, userPassword);
  if (!passCompare) {
    throw new Error(`Email or password is wrong`);
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  await User.findByIdAndUpdate(user._id, { token });
  res.status(201).json({ token, user: { email,role:user.role }});
};
module.exports = login;
