import type { Member, Prisma } from "../generated/client.js";
export declare const getAllMembers: (page: number, limit: number, search?: string) => Promise<{
    members: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        name: string;
        email: string;
        joinedAt: string;
        userId: string | null;
    }[];
    totalItems: number;
    totalPages: number;
    currentPage: number;
}>;
export declare const getMemberById: (id: string) => Promise<Member>;
export declare const createMember: (data: Prisma.MemberCreateInput) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    name: string;
    email: string;
    joinedAt: string;
    userId: string | null;
}>;
export declare const updateMember: (id: string, data: Prisma.MemberUpdateInput) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    name: string;
    email: string;
    joinedAt: string;
    userId: string | null;
}>;
export declare const deleteMember: (id: string) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    name: string;
    email: string;
    joinedAt: string;
    userId: string | null;
}>;
//# sourceMappingURL=member.service.d.ts.map
