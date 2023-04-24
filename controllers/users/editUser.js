const User = require("../../models/users");
const { editUserSchema } = require("../../helpers/joiSchemas");
const editUser = async (req, res, next) => {
  const { error } = editUserSchema.validate(req.body);
  if (error) {
    return res.status(404).json({ message: error.message });
  }
  const { id: owner } = req.user;
  if (!req.body) {
    res.status(404).json({ message: "missing fields" });
  }
  const { firstName, lastName, username, address, country, city, postalCode } =
    req.body;
  const user = await User.findByIdAndUpdate(
    owner,
    { firstName, lastName, username, address, country, city, postalCode },
    { new: true }
  );
  console.log(user);
  if (!user) {
    res.status(404).json({ message: `Item with id ${owner} not found` });
    return;
  }
  res.status(200).json({ data: user });
};
module.exports = editUser;
