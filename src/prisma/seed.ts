import prisma from "../prisma";
import bcrypt from "bcrypt";

async function main() {
  console.log("🌱 Starting Seeding...");

  /* =========================
     1. Optional Clean Up
     (Jangan aktifkan di production)
  ========================= */
  // await prisma.book.deleteMany();
  // await prisma.member.deleteMany();
  // await prisma.user.deleteMany();

  /* =========================
     2. Hash Password
  ========================= */
  const adminPassword = await bcrypt.hash("admin123", 10);
  const memberPassword = await bcrypt.hash("member123", 10);

  /* =========================
     3. Seed ADMIN User
  ========================= */
  const adminUser = await prisma.user.upsert({
    where: { email: "admin@library.local" },
    update: {},
    create: {
      email: "admin@library.local",
      password: adminPassword,
      role: "ADMIN"
    }
  });

  /* =========================
     4. Seed MEMBER User + Member Profile
  ========================= */
  const memberUser = await prisma.user.upsert({
    where: { email: "member@library.local" },
    update: {},
    create: {
      email: "member@library.local",
      password: memberPassword,
      role: "MEMBER",
      member: {
        create: {
          name: "Budi Santoso",
          email: "member@library.local",
          joinedAt: new Date().toISOString()
        }
      }
    }
  });

  /* =========================
     5. Seed Books Dummy
  ========================= */
  await prisma.book.createMany({
    data: [
      {
        title: "Clean Code",
        author: "Robert C. Martin",
        tahun: 2008,
        stok: 5,
        description: "A Handbook of Agile Software Craftsmanship"
      },
      {
        title: "Refactoring",
        author: "Martin Fowler",
        tahun: 2018,
        stok: 3,
        description: "Improving the Design of Existing Code"
      },
      {
        title: "Design Patterns",
        author: "Erich Gamma",
        tahun: 1994,
        stok: 2,
        description: "Elements of Reusable Object-Oriented Software"
      }
    ],
    skipDuplicates: true
  });

  console.log("✅ Seeding Completed!");
  console.log("🔐 Admin Login:");
  console.log("   Email    : admin@library.local");
  console.log("   Password : admin123");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
