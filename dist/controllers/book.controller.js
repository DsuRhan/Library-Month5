import * as BookService from '../services/book.service';
import { asyncHandler } from '../utils/async.handler';
import { successResponse } from '../utils/response';
/* =========================
   GET ALL
========================= */
export const getAllBooks = asyncHandler(async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    // ⬇️ build params SAFELY (no undefined props)
    const params = {
        page,
        limit,
        search: req.query.search,
        sortBy: req.query.sortBy,
        sortOrder: req.query.sortOrder,
        ...(req.query.available === 'true' && { available: true }),
        ...(req.query.available === 'false' && { available: false }),
        ...(req.query.yearFrom && { yearFrom: Number(req.query.yearFrom) }),
        ...(req.query.yearTo && { yearTo: Number(req.query.yearTo) })
    };
    const result = await BookService.getAllBooks(params);
    return successResponse(res, 'Daftar buku', result.books, {
        page: result.currentPage,
        limit,
        total: result.totalItems,
        totalPages: result.totalPages
    });
});
/* =========================
   GET BY ID
========================= */
export const getBookById = asyncHandler(async (req, res) => {
    const book = await BookService.getBookById(String(req.params.id));
    return successResponse(res, 'Buku ditemukan', book);
});
/* =========================
   CREATE
========================= */
export const createBook = asyncHandler(async (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).json({ message: 'Cover buku wajib diupload' });
    }
    const book = await BookService.createBook({
        title: req.body.title,
        author: req.body.author,
        tahun: Number(req.body.tahun),
        stok: Number(req.body.stok),
        description: req.body.description ?? null,
        cover: `/public/uploads/${file.filename}`
    });
    return successResponse(res, 'Buku berhasil ditambahkan', book, null, 201);
});
/* =========================
   UPDATE
========================= */
export const updateBook = asyncHandler(async (req, res) => {
    const file = req.file;
    const data = {
        ...req.body,
        ...(req.body.tahun && { tahun: Number(req.body.tahun) }),
        ...(req.body.stok && { stok: Number(req.body.stok) }),
        ...(file && { cover: `/public/uploads/${file.filename}` })
    };
    const book = await BookService.updateBook(String(req.params.id), data);
    return successResponse(res, 'Buku berhasil diupdate', book);
});
/* =========================
   DELETE
========================= */
export const deleteBook = asyncHandler(async (req, res) => {
    const book = await BookService.deleteBook(String(req.params.id));
    return successResponse(res, 'Buku berhasil dihapus', book);
});
//# sourceMappingURL=book.controller.js.map