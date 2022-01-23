const AuthServices = require("../services/authServices");
class AuthController {
  static async createUser(req, res) {
    const { error, data } = await AuthServices.createUser(req.body);

    if (error)
      return res.status(data.status || 500).json({ message: data.message });

    res.status(201).send(data);
  }

  static async loginUser(req, res) {
    !req.body
      ? res.status(400).send("usuario no existe")
      : res.send(req.user[0]);
  }

  static async logoutUser(req, res) {
    req.logout();
    res.sendStatus(200);
  }
}

module.exports = AuthController;
