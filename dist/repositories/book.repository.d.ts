import type { Prisma } from "../generated/client.js";
export declare const findAll: (skip: number, take: number, where: Prisma.BookWhereInput, orderBy: Prisma.BookOrderByWithRelationInput) => Promise<{
    id: string;
    title: string;
    author: string;
    tahun: number;
    stok: number;
    description: string | null;
    cover: string | null;
    memberId: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}[]>;
export declare const countAll: (where: Prisma.BookWhereInput) => Promise<number>;
export declare const findById: (id: string) => Promise<{
    id: string;
    title: string;
    author: string;
    tahun: number;
    stok: number;
    description: string | null;
    cover: string | null;
    memberId: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
} | null>;
export declare const create: (data: Prisma.BookCreateInput) => Promise<{
    id: string;
    title: string;
    author: string;
    tahun: number;
    stok: number;
    description: string | null;
    cover: string | null;
    memberId: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}>;
export declare const update: (id: string, data: Prisma.BookUpdateInput) => Promise<{
    id: string;
    title: string;
    author: string;
    tahun: number;
    stok: number;
    description: string | null;
    cover: string | null;
    memberId: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}>;
export declare const softDelete: (id: string) => Promise<{
    id: string;
    title: string;
    author: string;
    tahun: number;
    stok: number;
    description: string | null;
    cover: string | null;
    memberId: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}>;
//# sourceMappingURL=book.repository.d.ts.map
