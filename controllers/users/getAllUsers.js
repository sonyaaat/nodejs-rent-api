const User = require("../../models/users");
const getAllUsers = async (req, res) => {

  if (req.user.role !== "admin") {
    throw new Error("You are not allowed to add items");
  }
  const admins = await User.find({ role: "admin" });
  const adminsMails = admins.map((ad) => ad.email);

  
  const users = await User.find({ role: "user" });
  const usersMails = users.map((ad) => ad.email);

  res.status(200).json({ admins: adminsMails, users: usersMails });
};
module.exports = getAllUsers;
