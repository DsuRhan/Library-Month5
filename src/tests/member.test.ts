import request from "supertest";
import app from "../app";
import prisma from "../database";
import jwt from "jsonwebtoken";

describe("MEMBER API TEST", () => {
  const adminToken = jwt.sign(
    { id: "admin-id", role: "ADMIN" },
    process.env.JWT_SECRET || "secret_kunci_rahasia"
  );

  const userToken = jwt.sign(
    { id: "user-id", role: "MEMBER" },
    process.env.JWT_SECRET || "secret_kunci_rahasia"
  );

  let memberId: string;

  /* =========================
     SETUP DATA
  ========================= */
  beforeAll(async () => {
    const user = await prisma.user.create({
      data: {
        email: "member-test@mail.com",
        password: "hashedpassword",
        role: "MEMBER"
      }
    });

    const member = await prisma.member.create({
      data: {
        name: "Member Test",
        email: "member-test@mail.com",
        joinedAt: new Date().toISOString(),
        userId: user.id
      }
    });

    memberId = member.id;
  });

  /* =========================
     GET /members
  ========================= */
  describe("GET /api/members", () => {
    it("should return 401 if no token", async () => {
      const res = await request(app)
        .get("/api/members");

      expect(res.statusCode).toBe(401);
      expect(res.body.success).toBe(false);
    });

    it("should return 200 and list of members for admin", async () => {
      const res = await request(app)
        .get("/api/members")
        .set("Authorization", `Bearer ${adminToken}`);

      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.meta).toHaveProperty("total");
    });
  });

  /* =========================
     GET /members/:id
  ========================= */
  describe("GET /api/members/:id", () => {
    it("should return 404 if member not found", async () => {
      const res = await request(app)
        .get("/api/members/invalid-id")
        .set("Authorization", `Bearer ${adminToken}`);

      expect(res.statusCode).toBe(404);
      expect(res.body.success).toBe(false);
    });

    it("should return 200 when member exists", async () => {
      const res = await request(app)
        .get(`/api/members/${memberId}`)
        .set("Authorization", `Bearer ${adminToken}`);

      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.email).toBe("member-test@mail.com");
    });
  });

  /* =========================
     PUT /members/:id
  ========================= */
  describe("PUT /api/members/:id", () => {
    it("should return 403 for non-admin", async () => {
      const res = await request(app)
        .put(`/api/members/${memberId}`)
        .set("Authorization", `Bearer ${userToken}`)
        .send({ name: "Updated Name" });

      expect(res.statusCode).toBe(403);
    });

    it("should update member data for admin", async () => {
      const res = await request(app)
        .put(`/api/members/${memberId}`)
        .set("Authorization", `Bearer ${adminToken}`)
        .send({ name: "Updated Member" });

      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.name).toBe("Updated Member");
    });
  });

  /* =========================
     DELETE /members/:id
  ========================= */
  describe("DELETE /api/members/:id", () => {
    it("should return 403 if not admin", async () => {
      const res = await request(app)
        .delete(`/api/members/${memberId}`)
        .set("Authorization", `Bearer ${userToken}`);

      expect(res.statusCode).toBe(403);
    });

    it("should soft delete member for admin", async () => {
      const res = await request(app)
        .delete(`/api/members/${memberId}`)
        .set("Authorization", `Bearer ${adminToken}`);

      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);

      const member = await prisma.member.findUnique({
        where: { id: memberId }
      });

      expect(member?.deletedAt).not.toBeNull();
    });
  });
});

/* =========================
   CLEANUP
========================= */
afterAll(async () => {
  await prisma.member.deleteMany({
    where: { email: "member-test@mail.com" }
  });

  await prisma.user.deleteMany({
    where: { email: "member-test@mail.com" }
  });

  await prisma.$disconnect();
});
