export declare const findByEmail: (email: string) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    password: string;
    role: import("../generated/enums").Role;
} | null>;
export declare const findById: (id: string) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    password: string;
    role: import("../generated/enums").Role;
} | null>;
export declare const create: (data: {
    email: string;
    password: string;
    role: "ADMIN" | "MEMBER";
}) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    password: string;
    role: import("../generated/enums").Role;
}>;
//# sourceMappingURL=user.repository.d.ts.map