//src/repositories/member.repository.tsimport prisma from "../prisma";
import type { Prisma } from "../generated/client";
import prisma from "../database";

/* =========================
   FIND ALL (PAGINATION)
========================= */
export const findAll = async (
  skip: number,
  take: number,
  where: Prisma.MemberWhereInput
) => {
  return prisma.member.findMany({
    skip,
    take,
    where,
    orderBy: {
      createdAt: "desc"
    }
  });
};

/* =========================
   COUNT
========================= */
export const countAll = async (
  where: Prisma.MemberWhereInput
) => {
  return prisma.member.count({ where });
};

/* =========================
   FIND BY ID
========================= */
export const findById = async (id: string) => {
  return prisma.member.findFirst({
    where: {
      id,
      deletedAt: null
    }
  });
};

/* =========================
   CREATE
========================= */
export const create = async (
  data: Prisma.MemberCreateInput
) => {
  return prisma.member.create({ data });
};

/* =========================
   UPDATE
========================= */
export const update = async (
  id: string,
  data: Prisma.MemberUpdateInput
) => {
  return prisma.member.update({
    where: { id },
    data
  });
};

/* =========================
   SOFT DELETE
========================= */
export const softDelete = async (id: string) => {
  return prisma.member.update({
    where: { id },
    data: {
      deletedAt: new Date()
    }
  });
};
