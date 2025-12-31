interface BorrowItemInput {
    bookId: string;
    qty: number;
}
interface BorrowFilter {
    status?: 'BORROWED' | 'RETURNED';
    startDate?: Date | undefined;
    endDate?: Date | undefined;
    memberName?: string;
}
export declare const borrowBooks: (memberId: string, items: BorrowItemInput[]) => Promise<{
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
    status: import("#generated/client").BorrowStatus;
    borrowedAt: Date;
    dueDate: Date;
    returnedAt: Date | null;
    fine: number;
}>;
export declare const returnBorrow: (borrowId: string) => Promise<{
    id: string;
    memberId: string;
    createdAt: Date;
    updatedAt: Date;
    status: import("#generated/client").BorrowStatus;
    borrowedAt: Date;
    dueDate: Date;
    returnedAt: Date | null;
    fine: number;
}>;
export declare const getMyBorrowings: (memberId: string) => Promise<({
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
    status: import("#generated/client").BorrowStatus;
    borrowedAt: Date;
    dueDate: Date;
    returnedAt: Date | null;
    fine: number;
})[]>;
export declare const getAllBorrowings: (filter: BorrowFilter) => Promise<({
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
    status: import("#generated/client").BorrowStatus;
    borrowedAt: Date;
    dueDate: Date;
    returnedAt: Date | null;
    fine: number;
})[]>;
export {};
//# sourceMappingURL=borrow.service.d.ts.map