//src/app.ts
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { v4 as uuidv4 } from "uuid";

import bookRoutes from "./routes/book.route";
import memberRoutes from "./routes/member.route";
import userRoutes from "./routes/user.route";
import authRoutes from "./routes/auth.route";
import borrowRoutes from "./routes/borrow.route";
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './utils/swagger'; // Import config yang tadi dibuat

import { errorMiddleware } from "./middlewares/error.middleware";
import { notFoundMiddleware } from "./middlewares/notfound.middleware";

const app = express();

// Basic security & JSON parser
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (_req, res) => {
  res.redirect('/api-docs');
});

// Custom Middleware: X-Request-ID
app.use((req, res, next) => {
  const id = uuidv4();
  req.headers["x-request-id"] = id;
  res.setHeader("X-Request-ID", id);
  next();
});

// Response Time Middleware
app.use((_req, res, next) => {//'req' is declared but its value is never read.
  const start = Date.now();
  const original = res.json.bind(res);

  res.json = (body: any) => {
    const duration = Date.now() - start;
    res.setHeader("X-Response-Time", `${duration}ms`);
    return original(body);
  };

  next();
});


// Routes
app.use("/api/books", bookRoutes);
app.use("/api/members", memberRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/borrowings", borrowRoutes);

// 404 Not Found
app.use(notFoundMiddleware);

// Global Error Handler
app.use(errorMiddleware);

export default app;
