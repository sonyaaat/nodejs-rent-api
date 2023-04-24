const User = require("../../models/users");
const userInfo =async (req, res, next) => {
  const { id: owner } = req.user;
  const result = await User.findById(owner);

  if (!result) {
    res.status(404).json({ message: `Item with id ${owner} not found` });
    return;
  }
  res.status(200).json({ result });
};
module.exports = userInfo;
