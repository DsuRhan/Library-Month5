import request from "supertest";
import app from "../app";
import prisma from "../database";
import jwt from "jsonwebtoken";

describe("AUTH & USER API TEST", () => {
  const adminToken = jwt.sign(
    { id: "admin-id", role: "ADMIN" },
    process.env.JWT_SECRET || "secret_kunci_rahasia"
  );

  const memberData = {
    name: "Test Member",
    email: "member@test.com",
    password: "password123"
  };

  /* =========================
     POST /auth/register
  ========================= */
  describe("POST /api/auth/register", () => {
    it("should return 201 when register success", async () => {
      const res = await request(app)
        .post("/api/auth/register")
        .send(memberData);

      expect(res.statusCode).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveProperty("id");
      expect(res.body.data.email).toBe(memberData.email);
    });

    it("should return 400 when email already exists", async () => {
      const res = await request(app)
        .post("/api/auth/register")
        .send(memberData);

      expect(res.statusCode).toBe(400);
      expect(res.body.success).toBe(false);
    });
  });

  /* =========================
     POST /auth/login
  ========================= */
  describe("POST /api/auth/login", () => {
    it("should return 401 for wrong password", async () => {
      const res = await request(app)
        .post("/api/auth/login")
        .send({
          email: memberData.email,
          password: "wrongpassword"
        });

      expect(res.statusCode).toBe(401);
      expect(res.body.success).toBe(false);
    });

    it("should return 200 and token when login success", async () => {
      const res = await request(app)
        .post("/api/auth/login")
        .send({
          email: memberData.email,
          password: memberData.password
        });

      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveProperty("token");
      expect(res.body.data.user.email).toBe(memberData.email);
    });
  });

  /* =========================
     GET /users
  ========================= */
  describe("GET /api/users", () => {
    it("should return 401 if no token", async () => {
      const res = await request(app)
        .get("/api/users");

      expect(res.statusCode).toBe(401);
      expect(res.body.success).toBe(false);
    });

    it("should return 200 and list of users for admin", async () => {
      const res = await request(app)
        .get("/api/users")
        .set("Authorization", `Bearer ${adminToken}`);

      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
    });
  });
});

/* =========================
   CLEANUP
========================= */
afterAll(async () => {
  await prisma.user.deleteMany({
    where: { email: "member@test.com" }
  });

  await prisma.$disconnect();
});
