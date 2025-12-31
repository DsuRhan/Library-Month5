export declare const register: (data: {
    name: string;
    email: string;
    password: string;
}) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    password: string;
    role: import("../generated/enums.js").Role;
}>;
export declare const login: (data: {
    email: string;
    password: string;
}) => Promise<{
    token: string;
    user: {
        id: string;
        email: string;
        role: import("../generated/enums.js").Role;
    };
}>;
//# sourceMappingURL=auth.service.d.ts.map
