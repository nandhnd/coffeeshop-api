import Transaction from "../models/transaction.js";
import { transactionSchema } from "../validators/transactionValidator.js";

const transactionController = {
  // Get all transactions
  async getAll(req, res) {
    try {
      const transactions = await Transaction.findAll();
      res.status(200).json({
        status: true,
        message: "All transactions retrieved",
        data: transactions,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: false, message: "Server error", error });
    }
  },

  // Get a single transaction by ID
  async getDetail(req, res) {
    try {
      const id = req.params.id;
      if (!id || isNaN(id)) {
        return res.status(400).json({ status: false, message: "Invalid ID" });
      }

      const transaction = await Transaction.findByPk(id);
      if (!transaction) {
        return res
          .status(404)
          .json({ status: false, message: "Transaction not found" });
      }

      res.status(200).json({
        status: true,
        message: "Transaction found",
        data: transaction,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: false, message: "Server error", error });
    }
  },

  // Create a new transaction
  async create(req, res) {
    try {
      const { error } = transactionSchema.validate(req.body);
      if (error) {
        return res.status(400).json({
          status: false,
          message: "Validation error",
          details: error.details.map((d) => d.message),
        });
      }

      const { userId, buyerName, menus, total } = req.body;

      const transaction = await Transaction.create({
        userId,
        buyerName,
        menus,
        total,
      });

      res.status(201).json({
        status: true,
        message: "Transaction created",
        data: transaction,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: false, message: "Server error", error });
    }
  },

  // Update transaction by ID
  async update(req, res) {
    try {
      const { error } = transactionSchema.validate(req.body);
      if (error) {
        return res.status(400).json({
          status: false,
          message: "Validation error",
          details: error.details.map((d) => d.message),
        });
      }
      const id = req.params.id;
      const { userId, buyerName, menus, total } = req.body;

      const transaction = await Transaction.findByPk(id);
      if (!transaction) {
        return res
          .status(404)
          .json({ status: false, message: "Transaction not found" });
      }

      await transaction.update({ userId, buyerName, menus, total });

      res.status(200).json({
        status: true,
        message: "Transaction updated",
        data: transaction,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: false, message: "Server error", error });
    }
  },

  // Delete transaction by ID
  async delete(req, res) {
    try {
      const id = req.params.id;

      const transaction = await Transaction.findByPk(id);
      if (!transaction) {
        return res
          .status(404)
          .json({ status: false, message: "Transaction not found" });
      }

      await transaction.destroy();

      res.status(200).json({
        status: true,
        message: "Transaction deleted",
        data: transaction,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: false, message: "Server error", error });
    }
  },
};

export default transactionController;
