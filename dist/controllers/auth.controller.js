import * as AuthService from '../services/auth.service';
import { asyncHandler } from '../utils/async.handler';
import { successResponse } from '../utils/response';
/* =========================
   REGISTER
========================= */
export const register = asyncHandler(async (req, res) => {
    const user = await AuthService.register(req.body);
    return successResponse(res, 'Register berhasil', user, null, 201);
});
/* =========================
   LOGIN
========================= */
export const login = asyncHandler(async (req, res) => {
    const result = await AuthService.login(req.body);
    return successResponse(res, 'Login berhasil', result);
});
//# sourceMappingURL=auth.controller.js.map