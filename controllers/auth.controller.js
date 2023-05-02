export const register = (req, res) => {
  res.json({ user_Register: true, userData: req.body });
};

export const login = (req, res) => {
  res.json({ user_Login: true, userData: req.body });
};
