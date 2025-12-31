import type { Prisma } from "../generated/client.js";
export declare const createBorrow: (data: Prisma.BorrowCreateInput, tx: Prisma.TransactionClient) => Promise<{
    member: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        name: string;
        email: string;
        joinedAt: string;
        userId: string | null;
    };
    items: ({
        book: {
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
        };
    } & {
        id: string;
        qty: number;
        bookId: string;
        borrowId: string;
    })[];
} & {
    id: string;
    memberId: string;
    createdAt: Date;
    updatedAt: Date;
    status: import("../generated/enums.js").BorrowStatus;
    borrowedAt: Date;
    dueDate: Date;
    returnedAt: Date | null;
    fine: number;
}>;
export declare const findByIdTx: (id: string, tx: Prisma.TransactionClient) => Promise<({
    member: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        name: string;
        email: string;
        joinedAt: string;
        userId: string | null;
    };
    items: ({
        book: {
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
        };
    } & {
        id: string;
        qty: number;
        bookId: string;
        borrowId: string;
    })[];
} & {
    id: string;
    memberId: string;
    createdAt: Date;
    updatedAt: Date;
    status: import("../generated/enums.js").BorrowStatus;
    borrowedAt: Date;
    dueDate: Date;
    returnedAt: Date | null;
    fine: number;
}) | null>;
export declare const findByMemberId: (memberId: string) => Promise<({
    items: ({
        book: {
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
        };
    } & {
        id: string;
        qty: number;
        bookId: string;
        borrowId: string;
    })[];
} & {
    id: string;
    memberId: string;
    createdAt: Date;
    updatedAt: Date;
    status: import("../generated/enums.js").BorrowStatus;
    borrowedAt: Date;
    dueDate: Date;
    returnedAt: Date | null;
    fine: number;
})[]>;
export declare const findAll: () => Promise<({
    member: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        name: string;
        email: string;
        joinedAt: string;
        userId: string | null;
    };
    items: ({
        book: {
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
        };
    } & {
        id: string;
        qty: number;
        bookId: string;
        borrowId: string;
    })[];
} & {
    id: string;
    memberId: string;
    createdAt: Date;
    updatedAt: Date;
    status: import("../generated/enums.js").BorrowStatus;
    borrowedAt: Date;
    dueDate: Date;
    returnedAt: Date | null;
    fine: number;
})[]>;
export declare const updateReturn: (id: string, data: Prisma.BorrowUpdateInput, tx: Prisma.TransactionClient) => Promise<{
    id: string;
    memberId: string;
    createdAt: Date;
    updatedAt: Date;
    status: import("../generated/enums.js").BorrowStatus;
    borrowedAt: Date;
    dueDate: Date;
    returnedAt: Date | null;
    fine: number;
}>;
export declare const findAllWithFilter: (where: Prisma.BorrowWhereInput) => Promise<({
    member: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        name: string;
        email: string;
        joinedAt: string;
        userId: string | null;
    };
    items: ({
        book: {
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
        };
    } & {
        id: string;
        qty: number;
        bookId: string;
        borrowId: string;
    })[];
} & {
    id: string;
    memberId: string;
    createdAt: Date;
    updatedAt: Date;
    status: import("../generated/enums.js").BorrowStatus;
    borrowedAt: Date;
    dueDate: Date;
    returnedAt: Date | null;
    fine: number;
})[]>;
//# sourceMappingURL=borrow.repository.d.ts.map
