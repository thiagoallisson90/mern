const create = (req, res) => {
  const user = req.body;
  const { name, username, email, password, avatar } = user;

  if (!name || !username || !email || !password || !avatar) {
    res.status(400).json({ error: "Data format is invalid!" });
  }

  res.status(201).json({
    msg: "User created successfully!",
    user: {
      name,
      username,
      email,
      avatar,
    },
  });
};

export default create;
