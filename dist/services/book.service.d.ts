import type { Book, Prisma } from '../generated/client';
interface FindAllParams {
    page: number;
    limit: number;
    search?: string;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
    available?: boolean;
    yearFrom?: number;
    yearTo?: number;
}
export declare const getAllBooks: (params: FindAllParams) => Promise<{
    books: {
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
    }[];
    totalItems: number;
    totalPages: number;
    currentPage: number;
}>;
export declare const getBookById: (id: string) => Promise<Book>;
export declare const createBook: (data: Prisma.BookCreateInput) => Promise<{
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
export declare const updateBook: (id: string, data: Prisma.BookUpdateInput) => Promise<{
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
export declare const deleteBook: (id: string) => Promise<{
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
export {};
//# sourceMappingURL=book.service.d.ts.map