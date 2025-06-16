import express from "express";
// import swaggerUi from "swagger-ui-express";
// import swaggerDocument from "./docs/api-specs.json" assert { type: "json" };

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import menuRoutes from "./routes/menuRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/menus", menuRoutes);
app.use("/api/transactions", transactionRoutes);

// const options = {
//   customSiteTitle: "Dokumentasi API Aplikasi Portal Berita",
// };

// app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

export default app;
