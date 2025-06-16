import { Menu } from "../models/index.js";
import { menuSchema } from "../validators/menuValidator.js";

const menuController = {
  async getAll(req, res) {
    try {
      const menus = await Menu.findAll();
      if (!menus || menus.length < 1)
        return res.status(404).json({
          status: false,
          message: "No menus found",
        });
      res.status(200).json({
        status: true,
        message: "Menus found",
        data: menus,
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

      const menu = await Menu.findByPk(id);
      if (!menu)
        return res.status(404).json({
          status: false,
          message: "No menu found",
        });

      res.status(200).json({
        status: true,
        message: "Menu found",
        data: menu,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: false, message: "Server error", error });
    }
  },

  async create(req, res) {
    try {
      const { error } = menuSchema.validate(req.body, { abortEarly: false });
      if (error) {
        return res.status(400).json({
          status: false,
          message: error.details.map((err) => err.message.replace(/\"/g, "")),
        });
      }

      const { name, price, category } = req.body;
      const menu = await Menu.create({ name, price, category });

      res.status(201).json({
        status: true,
        message: "Menu created",
        data: menu,
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

      const { error } = menuSchema.validate(req.body, { abortEarly: false });
      if (error) {
        return res.status(400).json({
          status: false,
          message: error.details.map((err) => err.message.replace(/\"/g, "")),
        });
      }

      const { name, price, category } = req.body;
      const menu = await Menu.findByPk(id);
      if (!menu)
        return res
          .status(404)
          .json({ status: false, message: "Can't find menu by id" });

      const updatedMenu = await menu.update({ name, price, category });

      res.status(200).json({
        status: true,
        message: "Menu updated",
        data: updatedMenu,
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

      const menu = await Menu.findByPk(id);
      if (!menu)
        return res
          .status(404)
          .json({ status: false, message: "Can't find menu by id" });

      await menu.destroy();

      res.status(200).json({
        status: true,
        message: "Menu deleted",
        data: menu,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: false, message: "Server error", error });
    }
  },
};

export default menuController;
