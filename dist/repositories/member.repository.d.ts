import type { Prisma } from "../generated/client.js";
export declare const findAll: (skip: number, take: number, where: Prisma.MemberWhereInput) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    name: string;
    email: string;
    joinedAt: string;
    userId: string | null;
}[]>;
export declare const countAll: (where: Prisma.MemberWhereInput) => Promise<number>;
export declare const findById: (id: string) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    name: string;
    email: string;
    joinedAt: string;
    userId: string | null;
} | null>;
export declare const create: (data: Prisma.MemberCreateInput) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    name: string;
    email: string;
    joinedAt: string;
    userId: string | null;
}>;
export declare const update: (id: string, data: Prisma.MemberUpdateInput) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    name: string;
    email: string;
    joinedAt: string;
    userId: string | null;
}>;
export declare const softDelete: (id: string) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    name: string;
    email: string;
    joinedAt: string;
    userId: string | null;
}>;
//# sourceMappingURL=member.repository.d.ts.map
