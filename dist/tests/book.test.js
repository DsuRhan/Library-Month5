import request from "supertest";
import app from "../app.js";
import jwt from "jsonwebtoken";
import prisma from "../prisma.js";
describe("BOOK API TEST", () => {
    const adminToken = jwt.sign({ id: "admin-id", role: "ADMIN" }, process.env.JWT_SECRET || "secret_kunci_rahasia");
    let bookId;
    /* =========================
       GET /books
    ========================= */
    describe("GET /api/books", () => {
        it("should return 200 and list of books", async () => {
            const res = await request(app)
                .get("/api/books")
                .query({ page: 1, limit: 10 });
            expect(res.statusCode).toBe(200);
            expect(res.body.success).toBe(true);
            expect(Array.isArray(res.body.data)).toBe(true);
            expect(res.body.meta).toHaveProperty("total");
        });
        it("should support search query", async () => {
            const res = await request(app)
                .get("/api/books")
                .query({ search: "harry" });
            expect(res.statusCode).toBe(200);
            expect(res.body.success).toBe(true);
        });
    });
    /* =========================
       GET /books/:id
    ========================= */
    describe("GET /api/books/:id", () => {
        it("should return 404 if book not found", async () => {
            const res = await request(app)
                .get("/api/books/invalid-id");
            expect(res.statusCode).toBe(404);
            expect(res.body.success).toBe(false);
        });
        it("should return 200 when book exists", async () => {
            const book = await prisma.book.create({
                data: {
                    title: "Test Book",
                    author: "Lune",
                    tahun: 2024,
                    stok: 5,
                    cover: "/public/uploads/test.jpg"
                }
            });
            bookId = book.id;
            const res = await request(app)
                .get(`/api/books/${bookId}`);
            expect(res.statusCode).toBe(200);
            expect(res.body.success).toBe(true);
            expect(res.body.data.title).toBe("Test Book");
        });
    });
    /* =========================
       POST /books
    ========================= */
    describe("POST /api/books", () => {
        it("should return 401 if no token provided", async () => {
            const res = await request(app)
                .post("/api/books");
            expect(res.statusCode).toBe(401);
            expect(res.body.success).toBe(false);
        });
        it("should return 201 when admin creates book", async () => {
            const res = await request(app)
                .post("/api/books")
                .set("Authorization", `Bearer ${adminToken}`)
                .field("title", "Clean Code")
                .field("author", "Robert C. Martin")
                .field("tahun", 2020)
                .field("stok", 10)
                .attach("cover", Buffer.from("dummy-image"), "cover.jpg");
            expect(res.statusCode).toBe(201);
            expect(res.body.success).toBe(true);
            expect(res.body.data).toHaveProperty("id");
        });
    });
});
/* =========================
   CLEANUP
========================= */
afterAll(async () => {
    await prisma.book.deleteMany({
        where: { title: "Test Book" }
    });
    await prisma.$disconnect();
});
//# sourceMappingURL=book.test.js.map
