//src/controllers/member.controller.ts
import type { Request, Response } from 'express';
import * as MemberService from '../services/member.service';
import { asyncHandler } from '../utils/async.handler';
import { successResponse } from '../utils/response';

export const getAllMembers = asyncHandler(async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;

  const result = await MemberService.getAllMembers(
    page,
    limit,
    req.query.search as string
  );

  return successResponse(res, 'Daftar member', result.members, {
    page: result.currentPage,
    limit,
    total: result.totalItems,
    totalPages: result.totalPages
  });
});

export const getMemberById = asyncHandler(async (req: Request, res: Response) => {
  const member = await MemberService.getMemberById(String(req.params.id));
  return successResponse(res, 'Member ditemukan', member);
});

export const createMember = asyncHandler(async (req: Request, res: Response) => {
  const member = await MemberService.createMember(req.body);
  return successResponse(res, 'Member berhasil ditambahkan', member, null, 201);
});

export const updateMember = asyncHandler(async (req: Request, res: Response) => {
  const member = await MemberService.updateMember(
    String(req.params.id),
    req.body
  );
  return successResponse(res, 'Member berhasil diupdate', member);
});

export const deleteMember = asyncHandler(async (req: Request, res: Response) => {
  const member = await MemberService.deleteMember(String(req.params.id));
  return successResponse(res, 'Member berhasil dihapus', member);
});
