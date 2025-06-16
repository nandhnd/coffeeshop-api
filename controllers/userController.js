import { User } from "../models/index.js";
import { userSchema } from "../validators/userValidator.js";
import bcrypt from "bcrypt";

const userController = {
  async getAll(req, res) {
    try {
      const users = await User.findAll();
      if (!users || users.length < 1)
        return res.status(404).json({
          status: false,
          message: "No users found",
        });
      res.status(200).json({
        status: true,
        message: "Users found",
        data: users,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: false, message: "Server error", error });
    }
  },

  async getDetail(req, res) {
    try {
      const id = req.params.id;
      if (id && isNaN(id))
        return res
          .status(400)
          .json({ status: false, message: "ID must be number" });

      const user = await User.findByPk(id);
      if (!user)
        return res.status(404).json({
          status: false,
          message: "No user found",
        });

      res.status(200).json({
        status: true,
        message: "user found",
        data: user,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: false, message: "Server error", error });
    }
  },

  async create(req, res) {
    try {
      const { error } = userSchema.validate(req.body, { abortEarly: false });
      if (error) {
        return res.status(400).json({
          status: false,
          message: error.details.map((err) => err.message.replace(/\"/g, "")),
        });
      }
      const { name, email, password, role } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role,
      });

      res.status(201).json({
        status: true,
        message: "User created",
        data: user,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: false, message: "Server error", error });
    }
  },

  async update(req, res) {
    try {
      const id = req.params.id;
      if (id && isNaN(id))
        return res
          .status(400)
          .json({ status: false, message: "ID must be number" });

      const { error } = userSchema.validate(req.body, { abortEarly: false });
      if (error) {
        return res.status(400).json({
          status: false,
          message: error.details.map((err) => err.message.replace(/\"/g, "")),
        });
      }

      const { name, email, password, role } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.findByPk(id);
      if (!user)
        return res
          .status(404)
          .json({ status: false, message: "Can't find user by id" });

      const updateduser = await user.update({
        name,
        email,
        password: hashedPassword,
        role,
      });
      res.status(200).json({
        status: true,
        message: "user updated",
        data: updateduser,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: false, message: "Server error", error });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (id && isNaN(id))
        return res
          .status(400)
          .json({ status: false, message: "ID must be number" });

      const user = await User.findByPk(id);
      if (!user)
        return res
          .status(404)
          .json({ status: false, message: "Can't find user by id" });

      await user.destroy();

      res.status(200).json({
        status: true,
        message: "User deleted",
        data: user,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: false, message: "Server error", error });
    }
  },
};

export default userController;
