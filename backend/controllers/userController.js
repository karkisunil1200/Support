// @desc Register a new user user
// @route /api/users
// @access Publid
const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  //validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please include all of the fields");
  }
  res.send("Register Route");
};

// @desc Login a user
// @route /api/login
// @access Public
const loginUser = (req, res) => {
  res.send("Login Route");
};

module.exports = { registerUser, loginUser };
