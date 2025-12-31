import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Borrow
 *
 */
export type BorrowModel = runtime.Types.Result.DefaultSelection<Prisma.$BorrowPayload>;
export type AggregateBorrow = {
    _count: BorrowCountAggregateOutputType | null;
    _avg: BorrowAvgAggregateOutputType | null;
    _sum: BorrowSumAggregateOutputType | null;
    _min: BorrowMinAggregateOutputType | null;
    _max: BorrowMaxAggregateOutputType | null;
};
export type BorrowAvgAggregateOutputType = {
    fine: number | null;
};
export type BorrowSumAggregateOutputType = {
    fine: number | null;
};
export type BorrowMinAggregateOutputType = {
    id: string | null;
    memberId: string | null;
    status: $Enums.BorrowStatus | null;
    borrowedAt: Date | null;
    dueDate: Date | null;
    returnedAt: Date | null;
    fine: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BorrowMaxAggregateOutputType = {
    id: string | null;
    memberId: string | null;
    status: $Enums.BorrowStatus | null;
    borrowedAt: Date | null;
    dueDate: Date | null;
    returnedAt: Date | null;
    fine: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BorrowCountAggregateOutputType = {
    id: number;
    memberId: number;
    status: number;
    borrowedAt: number;
    dueDate: number;
    returnedAt: number;
    fine: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type BorrowAvgAggregateInputType = {
    fine?: true;
};
export type BorrowSumAggregateInputType = {
    fine?: true;
};
export type BorrowMinAggregateInputType = {
    id?: true;
    memberId?: true;
    status?: true;
    borrowedAt?: true;
    dueDate?: true;
    returnedAt?: true;
    fine?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BorrowMaxAggregateInputType = {
    id?: true;
    memberId?: true;
    status?: true;
    borrowedAt?: true;
    dueDate?: true;
    returnedAt?: true;
    fine?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BorrowCountAggregateInputType = {
    id?: true;
    memberId?: true;
    status?: true;
    borrowedAt?: true;
    dueDate?: true;
    returnedAt?: true;
    fine?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type BorrowAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Borrow to aggregate.
     */
    where?: Prisma.BorrowWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Borrows to fetch.
     */
    orderBy?: Prisma.BorrowOrderByWithRelationInput | Prisma.BorrowOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BorrowWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Borrows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Borrows.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Borrows
    **/
    _count?: true | BorrowCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: BorrowAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: BorrowSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BorrowMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BorrowMaxAggregateInputType;
};
export type GetBorrowAggregateType<T extends BorrowAggregateArgs> = {
    [P in keyof T & keyof AggregateBorrow]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBorrow[P]> : Prisma.GetScalarType<T[P], AggregateBorrow[P]>;
};
export type BorrowGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BorrowWhereInput;
    orderBy?: Prisma.BorrowOrderByWithAggregationInput | Prisma.BorrowOrderByWithAggregationInput[];
    by: Prisma.BorrowScalarFieldEnum[] | Prisma.BorrowScalarFieldEnum;
    having?: Prisma.BorrowScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BorrowCountAggregateInputType | true;
    _avg?: BorrowAvgAggregateInputType;
    _sum?: BorrowSumAggregateInputType;
    _min?: BorrowMinAggregateInputType;
    _max?: BorrowMaxAggregateInputType;
};
export type BorrowGroupByOutputType = {
    id: string;
    memberId: string;
    status: $Enums.BorrowStatus;
    borrowedAt: Date;
    dueDate: Date;
    returnedAt: Date | null;
    fine: number;
    createdAt: Date;
    updatedAt: Date;
    _count: BorrowCountAggregateOutputType | null;
    _avg: BorrowAvgAggregateOutputType | null;
    _sum: BorrowSumAggregateOutputType | null;
    _min: BorrowMinAggregateOutputType | null;
    _max: BorrowMaxAggregateOutputType | null;
};
type GetBorrowGroupByPayload<T extends BorrowGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BorrowGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BorrowGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BorrowGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BorrowGroupByOutputType[P]>;
}>>;
export type BorrowWhereInput = {
    AND?: Prisma.BorrowWhereInput | Prisma.BorrowWhereInput[];
    OR?: Prisma.BorrowWhereInput[];
    NOT?: Prisma.BorrowWhereInput | Prisma.BorrowWhereInput[];
    id?: Prisma.StringFilter<"Borrow"> | string;
    memberId?: Prisma.StringFilter<"Borrow"> | string;
    status?: Prisma.EnumBorrowStatusFilter<"Borrow"> | $Enums.BorrowStatus;
    borrowedAt?: Prisma.DateTimeFilter<"Borrow"> | Date | string;
    dueDate?: Prisma.DateTimeFilter<"Borrow"> | Date | string;
    returnedAt?: Prisma.DateTimeNullableFilter<"Borrow"> | Date | string | null;
    fine?: Prisma.IntFilter<"Borrow"> | number;
    createdAt?: Prisma.DateTimeFilter<"Borrow"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Borrow"> | Date | string;
    member?: Prisma.XOR<Prisma.MemberScalarRelationFilter, Prisma.MemberWhereInput>;
    items?: Prisma.BorrowItemListRelationFilter;
};
export type BorrowOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    memberId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    borrowedAt?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    returnedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    fine?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    member?: Prisma.MemberOrderByWithRelationInput;
    items?: Prisma.BorrowItemOrderByRelationAggregateInput;
};
export type BorrowWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BorrowWhereInput | Prisma.BorrowWhereInput[];
    OR?: Prisma.BorrowWhereInput[];
    NOT?: Prisma.BorrowWhereInput | Prisma.BorrowWhereInput[];
    memberId?: Prisma.StringFilter<"Borrow"> | string;
    status?: Prisma.EnumBorrowStatusFilter<"Borrow"> | $Enums.BorrowStatus;
    borrowedAt?: Prisma.DateTimeFilter<"Borrow"> | Date | string;
    dueDate?: Prisma.DateTimeFilter<"Borrow"> | Date | string;
    returnedAt?: Prisma.DateTimeNullableFilter<"Borrow"> | Date | string | null;
    fine?: Prisma.IntFilter<"Borrow"> | number;
    createdAt?: Prisma.DateTimeFilter<"Borrow"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Borrow"> | Date | string;
    member?: Prisma.XOR<Prisma.MemberScalarRelationFilter, Prisma.MemberWhereInput>;
    items?: Prisma.BorrowItemListRelationFilter;
}, "id">;
export type BorrowOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    memberId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    borrowedAt?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    returnedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    fine?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BorrowCountOrderByAggregateInput;
    _avg?: Prisma.BorrowAvgOrderByAggregateInput;
    _max?: Prisma.BorrowMaxOrderByAggregateInput;
    _min?: Prisma.BorrowMinOrderByAggregateInput;
    _sum?: Prisma.BorrowSumOrderByAggregateInput;
};
export type BorrowScalarWhereWithAggregatesInput = {
    AND?: Prisma.BorrowScalarWhereWithAggregatesInput | Prisma.BorrowScalarWhereWithAggregatesInput[];
    OR?: Prisma.BorrowScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BorrowScalarWhereWithAggregatesInput | Prisma.BorrowScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Borrow"> | string;
    memberId?: Prisma.StringWithAggregatesFilter<"Borrow"> | string;
    status?: Prisma.EnumBorrowStatusWithAggregatesFilter<"Borrow"> | $Enums.BorrowStatus;
    borrowedAt?: Prisma.DateTimeWithAggregatesFilter<"Borrow"> | Date | string;
    dueDate?: Prisma.DateTimeWithAggregatesFilter<"Borrow"> | Date | string;
    returnedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Borrow"> | Date | string | null;
    fine?: Prisma.IntWithAggregatesFilter<"Borrow"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Borrow"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Borrow"> | Date | string;
};
export type BorrowCreateInput = {
    id?: string;
    status?: $Enums.BorrowStatus;
    borrowedAt?: Date | string;
    dueDate: Date | string;
    returnedAt?: Date | string | null;
    fine?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    member: Prisma.MemberCreateNestedOneWithoutBorrowsInput;
    items?: Prisma.BorrowItemCreateNestedManyWithoutBorrowInput;
};
export type BorrowUncheckedCreateInput = {
    id?: string;
    memberId: string;
    status?: $Enums.BorrowStatus;
    borrowedAt?: Date | string;
    dueDate: Date | string;
    returnedAt?: Date | string | null;
    fine?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.BorrowItemUncheckedCreateNestedManyWithoutBorrowInput;
};
export type BorrowUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBorrowStatusFieldUpdateOperationsInput | $Enums.BorrowStatus;
    borrowedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    returnedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fine?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    member?: Prisma.MemberUpdateOneRequiredWithoutBorrowsNestedInput;
    items?: Prisma.BorrowItemUpdateManyWithoutBorrowNestedInput;
};
export type BorrowUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    memberId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBorrowStatusFieldUpdateOperationsInput | $Enums.BorrowStatus;
    borrowedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    returnedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fine?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.BorrowItemUncheckedUpdateManyWithoutBorrowNestedInput;
};
export type BorrowCreateManyInput = {
    id?: string;
    memberId: string;
    status?: $Enums.BorrowStatus;
    borrowedAt?: Date | string;
    dueDate: Date | string;
    returnedAt?: Date | string | null;
    fine?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BorrowUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBorrowStatusFieldUpdateOperationsInput | $Enums.BorrowStatus;
    borrowedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    returnedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fine?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BorrowUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    memberId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBorrowStatusFieldUpdateOperationsInput | $Enums.BorrowStatus;
    borrowedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    returnedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fine?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BorrowCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    memberId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    borrowedAt?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    returnedAt?: Prisma.SortOrder;
    fine?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BorrowAvgOrderByAggregateInput = {
    fine?: Prisma.SortOrder;
};
export type BorrowMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    memberId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    borrowedAt?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    returnedAt?: Prisma.SortOrder;
    fine?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BorrowMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    memberId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    borrowedAt?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    returnedAt?: Prisma.SortOrder;
    fine?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BorrowSumOrderByAggregateInput = {
    fine?: Prisma.SortOrder;
};
export type BorrowScalarRelationFilter = {
    is?: Prisma.BorrowWhereInput;
    isNot?: Prisma.BorrowWhereInput;
};
export type BorrowListRelationFilter = {
    every?: Prisma.BorrowWhereInput;
    some?: Prisma.BorrowWhereInput;
    none?: Prisma.BorrowWhereInput;
};
export type BorrowOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EnumBorrowStatusFieldUpdateOperationsInput = {
    set?: $Enums.BorrowStatus;
};
export type BorrowCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.BorrowCreateWithoutItemsInput, Prisma.BorrowUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.BorrowCreateOrConnectWithoutItemsInput;
    connect?: Prisma.BorrowWhereUniqueInput;
};
export type BorrowUpdateOneRequiredWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.BorrowCreateWithoutItemsInput, Prisma.BorrowUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.BorrowCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.BorrowUpsertWithoutItemsInput;
    connect?: Prisma.BorrowWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BorrowUpdateToOneWithWhereWithoutItemsInput, Prisma.BorrowUpdateWithoutItemsInput>, Prisma.BorrowUncheckedUpdateWithoutItemsInput>;
};
export type BorrowCreateNestedManyWithoutMemberInput = {
    create?: Prisma.XOR<Prisma.BorrowCreateWithoutMemberInput, Prisma.BorrowUncheckedCreateWithoutMemberInput> | Prisma.BorrowCreateWithoutMemberInput[] | Prisma.BorrowUncheckedCreateWithoutMemberInput[];
    connectOrCreate?: Prisma.BorrowCreateOrConnectWithoutMemberInput | Prisma.BorrowCreateOrConnectWithoutMemberInput[];
    createMany?: Prisma.BorrowCreateManyMemberInputEnvelope;
    connect?: Prisma.BorrowWhereUniqueInput | Prisma.BorrowWhereUniqueInput[];
};
export type BorrowUncheckedCreateNestedManyWithoutMemberInput = {
    create?: Prisma.XOR<Prisma.BorrowCreateWithoutMemberInput, Prisma.BorrowUncheckedCreateWithoutMemberInput> | Prisma.BorrowCreateWithoutMemberInput[] | Prisma.BorrowUncheckedCreateWithoutMemberInput[];
    connectOrCreate?: Prisma.BorrowCreateOrConnectWithoutMemberInput | Prisma.BorrowCreateOrConnectWithoutMemberInput[];
    createMany?: Prisma.BorrowCreateManyMemberInputEnvelope;
    connect?: Prisma.BorrowWhereUniqueInput | Prisma.BorrowWhereUniqueInput[];
};
export type BorrowUpdateManyWithoutMemberNestedInput = {
    create?: Prisma.XOR<Prisma.BorrowCreateWithoutMemberInput, Prisma.BorrowUncheckedCreateWithoutMemberInput> | Prisma.BorrowCreateWithoutMemberInput[] | Prisma.BorrowUncheckedCreateWithoutMemberInput[];
    connectOrCreate?: Prisma.BorrowCreateOrConnectWithoutMemberInput | Prisma.BorrowCreateOrConnectWithoutMemberInput[];
    upsert?: Prisma.BorrowUpsertWithWhereUniqueWithoutMemberInput | Prisma.BorrowUpsertWithWhereUniqueWithoutMemberInput[];
    createMany?: Prisma.BorrowCreateManyMemberInputEnvelope;
    set?: Prisma.BorrowWhereUniqueInput | Prisma.BorrowWhereUniqueInput[];
    disconnect?: Prisma.BorrowWhereUniqueInput | Prisma.BorrowWhereUniqueInput[];
    delete?: Prisma.BorrowWhereUniqueInput | Prisma.BorrowWhereUniqueInput[];
    connect?: Prisma.BorrowWhereUniqueInput | Prisma.BorrowWhereUniqueInput[];
    update?: Prisma.BorrowUpdateWithWhereUniqueWithoutMemberInput | Prisma.BorrowUpdateWithWhereUniqueWithoutMemberInput[];
    updateMany?: Prisma.BorrowUpdateManyWithWhereWithoutMemberInput | Prisma.BorrowUpdateManyWithWhereWithoutMemberInput[];
    deleteMany?: Prisma.BorrowScalarWhereInput | Prisma.BorrowScalarWhereInput[];
};
export type BorrowUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: Prisma.XOR<Prisma.BorrowCreateWithoutMemberInput, Prisma.BorrowUncheckedCreateWithoutMemberInput> | Prisma.BorrowCreateWithoutMemberInput[] | Prisma.BorrowUncheckedCreateWithoutMemberInput[];
    connectOrCreate?: Prisma.BorrowCreateOrConnectWithoutMemberInput | Prisma.BorrowCreateOrConnectWithoutMemberInput[];
    upsert?: Prisma.BorrowUpsertWithWhereUniqueWithoutMemberInput | Prisma.BorrowUpsertWithWhereUniqueWithoutMemberInput[];
    createMany?: Prisma.BorrowCreateManyMemberInputEnvelope;
    set?: Prisma.BorrowWhereUniqueInput | Prisma.BorrowWhereUniqueInput[];
    disconnect?: Prisma.BorrowWhereUniqueInput | Prisma.BorrowWhereUniqueInput[];
    delete?: Prisma.BorrowWhereUniqueInput | Prisma.BorrowWhereUniqueInput[];
    connect?: Prisma.BorrowWhereUniqueInput | Prisma.BorrowWhereUniqueInput[];
    update?: Prisma.BorrowUpdateWithWhereUniqueWithoutMemberInput | Prisma.BorrowUpdateWithWhereUniqueWithoutMemberInput[];
    updateMany?: Prisma.BorrowUpdateManyWithWhereWithoutMemberInput | Prisma.BorrowUpdateManyWithWhereWithoutMemberInput[];
    deleteMany?: Prisma.BorrowScalarWhereInput | Prisma.BorrowScalarWhereInput[];
};
export type BorrowCreateWithoutItemsInput = {
    id?: string;
    status?: $Enums.BorrowStatus;
    borrowedAt?: Date | string;
    dueDate: Date | string;
    returnedAt?: Date | string | null;
    fine?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    member: Prisma.MemberCreateNestedOneWithoutBorrowsInput;
};
export type BorrowUncheckedCreateWithoutItemsInput = {
    id?: string;
    memberId: string;
    status?: $Enums.BorrowStatus;
    borrowedAt?: Date | string;
    dueDate: Date | string;
    returnedAt?: Date | string | null;
    fine?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BorrowCreateOrConnectWithoutItemsInput = {
    where: Prisma.BorrowWhereUniqueInput;
    create: Prisma.XOR<Prisma.BorrowCreateWithoutItemsInput, Prisma.BorrowUncheckedCreateWithoutItemsInput>;
};
export type BorrowUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.BorrowUpdateWithoutItemsInput, Prisma.BorrowUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.BorrowCreateWithoutItemsInput, Prisma.BorrowUncheckedCreateWithoutItemsInput>;
    where?: Prisma.BorrowWhereInput;
};
export type BorrowUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.BorrowWhereInput;
    data: Prisma.XOR<Prisma.BorrowUpdateWithoutItemsInput, Prisma.BorrowUncheckedUpdateWithoutItemsInput>;
};
export type BorrowUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBorrowStatusFieldUpdateOperationsInput | $Enums.BorrowStatus;
    borrowedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    returnedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fine?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    member?: Prisma.MemberUpdateOneRequiredWithoutBorrowsNestedInput;
};
export type BorrowUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    memberId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBorrowStatusFieldUpdateOperationsInput | $Enums.BorrowStatus;
    borrowedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    returnedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fine?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BorrowCreateWithoutMemberInput = {
    id?: string;
    status?: $Enums.BorrowStatus;
    borrowedAt?: Date | string;
    dueDate: Date | string;
    returnedAt?: Date | string | null;
    fine?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.BorrowItemCreateNestedManyWithoutBorrowInput;
};
export type BorrowUncheckedCreateWithoutMemberInput = {
    id?: string;
    status?: $Enums.BorrowStatus;
    borrowedAt?: Date | string;
    dueDate: Date | string;
    returnedAt?: Date | string | null;
    fine?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.BorrowItemUncheckedCreateNestedManyWithoutBorrowInput;
};
export type BorrowCreateOrConnectWithoutMemberInput = {
    where: Prisma.BorrowWhereUniqueInput;
    create: Prisma.XOR<Prisma.BorrowCreateWithoutMemberInput, Prisma.BorrowUncheckedCreateWithoutMemberInput>;
};
export type BorrowCreateManyMemberInputEnvelope = {
    data: Prisma.BorrowCreateManyMemberInput | Prisma.BorrowCreateManyMemberInput[];
    skipDuplicates?: boolean;
};
export type BorrowUpsertWithWhereUniqueWithoutMemberInput = {
    where: Prisma.BorrowWhereUniqueInput;
    update: Prisma.XOR<Prisma.BorrowUpdateWithoutMemberInput, Prisma.BorrowUncheckedUpdateWithoutMemberInput>;
    create: Prisma.XOR<Prisma.BorrowCreateWithoutMemberInput, Prisma.BorrowUncheckedCreateWithoutMemberInput>;
};
export type BorrowUpdateWithWhereUniqueWithoutMemberInput = {
    where: Prisma.BorrowWhereUniqueInput;
    data: Prisma.XOR<Prisma.BorrowUpdateWithoutMemberInput, Prisma.BorrowUncheckedUpdateWithoutMemberInput>;
};
export type BorrowUpdateManyWithWhereWithoutMemberInput = {
    where: Prisma.BorrowScalarWhereInput;
    data: Prisma.XOR<Prisma.BorrowUpdateManyMutationInput, Prisma.BorrowUncheckedUpdateManyWithoutMemberInput>;
};
export type BorrowScalarWhereInput = {
    AND?: Prisma.BorrowScalarWhereInput | Prisma.BorrowScalarWhereInput[];
    OR?: Prisma.BorrowScalarWhereInput[];
    NOT?: Prisma.BorrowScalarWhereInput | Prisma.BorrowScalarWhereInput[];
    id?: Prisma.StringFilter<"Borrow"> | string;
    memberId?: Prisma.StringFilter<"Borrow"> | string;
    status?: Prisma.EnumBorrowStatusFilter<"Borrow"> | $Enums.BorrowStatus;
    borrowedAt?: Prisma.DateTimeFilter<"Borrow"> | Date | string;
    dueDate?: Prisma.DateTimeFilter<"Borrow"> | Date | string;
    returnedAt?: Prisma.DateTimeNullableFilter<"Borrow"> | Date | string | null;
    fine?: Prisma.IntFilter<"Borrow"> | number;
    createdAt?: Prisma.DateTimeFilter<"Borrow"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Borrow"> | Date | string;
};
export type BorrowCreateManyMemberInput = {
    id?: string;
    status?: $Enums.BorrowStatus;
    borrowedAt?: Date | string;
    dueDate: Date | string;
    returnedAt?: Date | string | null;
    fine?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BorrowUpdateWithoutMemberInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBorrowStatusFieldUpdateOperationsInput | $Enums.BorrowStatus;
    borrowedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    returnedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fine?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.BorrowItemUpdateManyWithoutBorrowNestedInput;
};
export type BorrowUncheckedUpdateWithoutMemberInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBorrowStatusFieldUpdateOperationsInput | $Enums.BorrowStatus;
    borrowedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    returnedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fine?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.BorrowItemUncheckedUpdateManyWithoutBorrowNestedInput;
};
export type BorrowUncheckedUpdateManyWithoutMemberInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBorrowStatusFieldUpdateOperationsInput | $Enums.BorrowStatus;
    borrowedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    returnedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fine?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type BorrowCountOutputType
 */
export type BorrowCountOutputType = {
    items: number;
};
export type BorrowCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    items?: boolean | BorrowCountOutputTypeCountItemsArgs;
};
/**
 * BorrowCountOutputType without action
 */
export type BorrowCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowCountOutputType
     */
    select?: Prisma.BorrowCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * BorrowCountOutputType without action
 */
export type BorrowCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BorrowItemWhereInput;
};
export type BorrowSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    memberId?: boolean;
    status?: boolean;
    borrowedAt?: boolean;
    dueDate?: boolean;
    returnedAt?: boolean;
    fine?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    member?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
    items?: boolean | Prisma.Borrow$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.BorrowCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["borrow"]>;
export type BorrowSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    memberId?: boolean;
    status?: boolean;
    borrowedAt?: boolean;
    dueDate?: boolean;
    returnedAt?: boolean;
    fine?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    member?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["borrow"]>;
export type BorrowSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    memberId?: boolean;
    status?: boolean;
    borrowedAt?: boolean;
    dueDate?: boolean;
    returnedAt?: boolean;
    fine?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    member?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["borrow"]>;
export type BorrowSelectScalar = {
    id?: boolean;
    memberId?: boolean;
    status?: boolean;
    borrowedAt?: boolean;
    dueDate?: boolean;
    returnedAt?: boolean;
    fine?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type BorrowOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "memberId" | "status" | "borrowedAt" | "dueDate" | "returnedAt" | "fine" | "createdAt" | "updatedAt", ExtArgs["result"]["borrow"]>;
export type BorrowInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    member?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
    items?: boolean | Prisma.Borrow$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.BorrowCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BorrowIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    member?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
};
export type BorrowIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    member?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
};
export type $BorrowPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Borrow";
    objects: {
        member: Prisma.$MemberPayload<ExtArgs>;
        items: Prisma.$BorrowItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        memberId: string;
        status: $Enums.BorrowStatus;
        borrowedAt: Date;
        dueDate: Date;
        returnedAt: Date | null;
        fine: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["borrow"]>;
    composites: {};
};
export type BorrowGetPayload<S extends boolean | null | undefined | BorrowDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BorrowPayload, S>;
export type BorrowCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BorrowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BorrowCountAggregateInputType | true;
};
export interface BorrowDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Borrow'];
        meta: {
            name: 'Borrow';
        };
    };
    /**
     * Find zero or one Borrow that matches the filter.
     * @param {BorrowFindUniqueArgs} args - Arguments to find a Borrow
     * @example
     * // Get one Borrow
     * const borrow = await prisma.borrow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BorrowFindUniqueArgs>(args: Prisma.SelectSubset<T, BorrowFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BorrowClient<runtime.Types.Result.GetResult<Prisma.$BorrowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Borrow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BorrowFindUniqueOrThrowArgs} args - Arguments to find a Borrow
     * @example
     * // Get one Borrow
     * const borrow = await prisma.borrow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BorrowFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BorrowFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BorrowClient<runtime.Types.Result.GetResult<Prisma.$BorrowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Borrow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowFindFirstArgs} args - Arguments to find a Borrow
     * @example
     * // Get one Borrow
     * const borrow = await prisma.borrow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BorrowFindFirstArgs>(args?: Prisma.SelectSubset<T, BorrowFindFirstArgs<ExtArgs>>): Prisma.Prisma__BorrowClient<runtime.Types.Result.GetResult<Prisma.$BorrowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Borrow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowFindFirstOrThrowArgs} args - Arguments to find a Borrow
     * @example
     * // Get one Borrow
     * const borrow = await prisma.borrow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BorrowFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BorrowFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BorrowClient<runtime.Types.Result.GetResult<Prisma.$BorrowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Borrows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Borrows
     * const borrows = await prisma.borrow.findMany()
     *
     * // Get first 10 Borrows
     * const borrows = await prisma.borrow.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const borrowWithIdOnly = await prisma.borrow.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BorrowFindManyArgs>(args?: Prisma.SelectSubset<T, BorrowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BorrowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Borrow.
     * @param {BorrowCreateArgs} args - Arguments to create a Borrow.
     * @example
     * // Create one Borrow
     * const Borrow = await prisma.borrow.create({
     *   data: {
     *     // ... data to create a Borrow
     *   }
     * })
     *
     */
    create<T extends BorrowCreateArgs>(args: Prisma.SelectSubset<T, BorrowCreateArgs<ExtArgs>>): Prisma.Prisma__BorrowClient<runtime.Types.Result.GetResult<Prisma.$BorrowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Borrows.
     * @param {BorrowCreateManyArgs} args - Arguments to create many Borrows.
     * @example
     * // Create many Borrows
     * const borrow = await prisma.borrow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BorrowCreateManyArgs>(args?: Prisma.SelectSubset<T, BorrowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Borrows and returns the data saved in the database.
     * @param {BorrowCreateManyAndReturnArgs} args - Arguments to create many Borrows.
     * @example
     * // Create many Borrows
     * const borrow = await prisma.borrow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Borrows and only return the `id`
     * const borrowWithIdOnly = await prisma.borrow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BorrowCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BorrowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BorrowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Borrow.
     * @param {BorrowDeleteArgs} args - Arguments to delete one Borrow.
     * @example
     * // Delete one Borrow
     * const Borrow = await prisma.borrow.delete({
     *   where: {
     *     // ... filter to delete one Borrow
     *   }
     * })
     *
     */
    delete<T extends BorrowDeleteArgs>(args: Prisma.SelectSubset<T, BorrowDeleteArgs<ExtArgs>>): Prisma.Prisma__BorrowClient<runtime.Types.Result.GetResult<Prisma.$BorrowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Borrow.
     * @param {BorrowUpdateArgs} args - Arguments to update one Borrow.
     * @example
     * // Update one Borrow
     * const borrow = await prisma.borrow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BorrowUpdateArgs>(args: Prisma.SelectSubset<T, BorrowUpdateArgs<ExtArgs>>): Prisma.Prisma__BorrowClient<runtime.Types.Result.GetResult<Prisma.$BorrowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Borrows.
     * @param {BorrowDeleteManyArgs} args - Arguments to filter Borrows to delete.
     * @example
     * // Delete a few Borrows
     * const { count } = await prisma.borrow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BorrowDeleteManyArgs>(args?: Prisma.SelectSubset<T, BorrowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Borrows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Borrows
     * const borrow = await prisma.borrow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BorrowUpdateManyArgs>(args: Prisma.SelectSubset<T, BorrowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Borrows and returns the data updated in the database.
     * @param {BorrowUpdateManyAndReturnArgs} args - Arguments to update many Borrows.
     * @example
     * // Update many Borrows
     * const borrow = await prisma.borrow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Borrows and only return the `id`
     * const borrowWithIdOnly = await prisma.borrow.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends BorrowUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BorrowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BorrowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Borrow.
     * @param {BorrowUpsertArgs} args - Arguments to update or create a Borrow.
     * @example
     * // Update or create a Borrow
     * const borrow = await prisma.borrow.upsert({
     *   create: {
     *     // ... data to create a Borrow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Borrow we want to update
     *   }
     * })
     */
    upsert<T extends BorrowUpsertArgs>(args: Prisma.SelectSubset<T, BorrowUpsertArgs<ExtArgs>>): Prisma.Prisma__BorrowClient<runtime.Types.Result.GetResult<Prisma.$BorrowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Borrows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowCountArgs} args - Arguments to filter Borrows to count.
     * @example
     * // Count the number of Borrows
     * const count = await prisma.borrow.count({
     *   where: {
     *     // ... the filter for the Borrows we want to count
     *   }
     * })
    **/
    count<T extends BorrowCountArgs>(args?: Prisma.Subset<T, BorrowCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BorrowCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Borrow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BorrowAggregateArgs>(args: Prisma.Subset<T, BorrowAggregateArgs>): Prisma.PrismaPromise<GetBorrowAggregateType<T>>;
    /**
     * Group by Borrow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends BorrowGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BorrowGroupByArgs['orderBy'];
    } : {
        orderBy?: BorrowGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BorrowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBorrowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Borrow model
     */
    readonly fields: BorrowFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Borrow.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BorrowClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    member<T extends Prisma.MemberDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MemberDefaultArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    items<T extends Prisma.Borrow$itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Borrow$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BorrowItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Borrow model
 */
export interface BorrowFieldRefs {
    readonly id: Prisma.FieldRef<"Borrow", 'String'>;
    readonly memberId: Prisma.FieldRef<"Borrow", 'String'>;
    readonly status: Prisma.FieldRef<"Borrow", 'BorrowStatus'>;
    readonly borrowedAt: Prisma.FieldRef<"Borrow", 'DateTime'>;
    readonly dueDate: Prisma.FieldRef<"Borrow", 'DateTime'>;
    readonly returnedAt: Prisma.FieldRef<"Borrow", 'DateTime'>;
    readonly fine: Prisma.FieldRef<"Borrow", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Borrow", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Borrow", 'DateTime'>;
}
/**
 * Borrow findUnique
 */
export type BorrowFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrow
     */
    select?: Prisma.BorrowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Borrow
     */
    omit?: Prisma.BorrowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BorrowInclude<ExtArgs> | null;
    /**
     * Filter, which Borrow to fetch.
     */
    where: Prisma.BorrowWhereUniqueInput;
};
/**
 * Borrow findUniqueOrThrow
 */
export type BorrowFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrow
     */
    select?: Prisma.BorrowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Borrow
     */
    omit?: Prisma.BorrowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BorrowInclude<ExtArgs> | null;
    /**
     * Filter, which Borrow to fetch.
     */
    where: Prisma.BorrowWhereUniqueInput;
};
/**
 * Borrow findFirst
 */
export type BorrowFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrow
     */
    select?: Prisma.BorrowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Borrow
     */
    omit?: Prisma.BorrowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BorrowInclude<ExtArgs> | null;
    /**
     * Filter, which Borrow to fetch.
     */
    where?: Prisma.BorrowWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Borrows to fetch.
     */
    orderBy?: Prisma.BorrowOrderByWithRelationInput | Prisma.BorrowOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Borrows.
     */
    cursor?: Prisma.BorrowWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Borrows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Borrows.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Borrows.
     */
    distinct?: Prisma.BorrowScalarFieldEnum | Prisma.BorrowScalarFieldEnum[];
};
/**
 * Borrow findFirstOrThrow
 */
export type BorrowFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrow
     */
    select?: Prisma.BorrowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Borrow
     */
    omit?: Prisma.BorrowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BorrowInclude<ExtArgs> | null;
    /**
     * Filter, which Borrow to fetch.
     */
    where?: Prisma.BorrowWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Borrows to fetch.
     */
    orderBy?: Prisma.BorrowOrderByWithRelationInput | Prisma.BorrowOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Borrows.
     */
    cursor?: Prisma.BorrowWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Borrows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Borrows.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Borrows.
     */
    distinct?: Prisma.BorrowScalarFieldEnum | Prisma.BorrowScalarFieldEnum[];
};
/**
 * Borrow findMany
 */
export type BorrowFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrow
     */
    select?: Prisma.BorrowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Borrow
     */
    omit?: Prisma.BorrowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BorrowInclude<ExtArgs> | null;
    /**
     * Filter, which Borrows to fetch.
     */
    where?: Prisma.BorrowWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Borrows to fetch.
     */
    orderBy?: Prisma.BorrowOrderByWithRelationInput | Prisma.BorrowOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Borrows.
     */
    cursor?: Prisma.BorrowWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Borrows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Borrows.
     */
    skip?: number;
    distinct?: Prisma.BorrowScalarFieldEnum | Prisma.BorrowScalarFieldEnum[];
};
/**
 * Borrow create
 */
export type BorrowCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrow
     */
    select?: Prisma.BorrowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Borrow
     */
    omit?: Prisma.BorrowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BorrowInclude<ExtArgs> | null;
    /**
     * The data needed to create a Borrow.
     */
    data: Prisma.XOR<Prisma.BorrowCreateInput, Prisma.BorrowUncheckedCreateInput>;
};
/**
 * Borrow createMany
 */
export type BorrowCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Borrows.
     */
    data: Prisma.BorrowCreateManyInput | Prisma.BorrowCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Borrow createManyAndReturn
 */
export type BorrowCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrow
     */
    select?: Prisma.BorrowSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Borrow
     */
    omit?: Prisma.BorrowOmit<ExtArgs> | null;
    /**
     * The data used to create many Borrows.
     */
    data: Prisma.BorrowCreateManyInput | Prisma.BorrowCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BorrowIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Borrow update
 */
export type BorrowUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrow
     */
    select?: Prisma.BorrowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Borrow
     */
    omit?: Prisma.BorrowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BorrowInclude<ExtArgs> | null;
    /**
     * The data needed to update a Borrow.
     */
    data: Prisma.XOR<Prisma.BorrowUpdateInput, Prisma.BorrowUncheckedUpdateInput>;
    /**
     * Choose, which Borrow to update.
     */
    where: Prisma.BorrowWhereUniqueInput;
};
/**
 * Borrow updateMany
 */
export type BorrowUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Borrows.
     */
    data: Prisma.XOR<Prisma.BorrowUpdateManyMutationInput, Prisma.BorrowUncheckedUpdateManyInput>;
    /**
     * Filter which Borrows to update
     */
    where?: Prisma.BorrowWhereInput;
    /**
     * Limit how many Borrows to update.
     */
    limit?: number;
};
/**
 * Borrow updateManyAndReturn
 */
export type BorrowUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrow
     */
    select?: Prisma.BorrowSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Borrow
     */
    omit?: Prisma.BorrowOmit<ExtArgs> | null;
    /**
     * The data used to update Borrows.
     */
    data: Prisma.XOR<Prisma.BorrowUpdateManyMutationInput, Prisma.BorrowUncheckedUpdateManyInput>;
    /**
     * Filter which Borrows to update
     */
    where?: Prisma.BorrowWhereInput;
    /**
     * Limit how many Borrows to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BorrowIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Borrow upsert
 */
export type BorrowUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrow
     */
    select?: Prisma.BorrowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Borrow
     */
    omit?: Prisma.BorrowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BorrowInclude<ExtArgs> | null;
    /**
     * The filter to search for the Borrow to update in case it exists.
     */
    where: Prisma.BorrowWhereUniqueInput;
    /**
     * In case the Borrow found by the `where` argument doesn't exist, create a new Borrow with this data.
     */
    create: Prisma.XOR<Prisma.BorrowCreateInput, Prisma.BorrowUncheckedCreateInput>;
    /**
     * In case the Borrow was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BorrowUpdateInput, Prisma.BorrowUncheckedUpdateInput>;
};
/**
 * Borrow delete
 */
export type BorrowDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrow
     */
    select?: Prisma.BorrowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Borrow
     */
    omit?: Prisma.BorrowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BorrowInclude<ExtArgs> | null;
    /**
     * Filter which Borrow to delete.
     */
    where: Prisma.BorrowWhereUniqueInput;
};
/**
 * Borrow deleteMany
 */
export type BorrowDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Borrows to delete
     */
    where?: Prisma.BorrowWhereInput;
    /**
     * Limit how many Borrows to delete.
     */
    limit?: number;
};
/**
 * Borrow.items
 */
export type Borrow$itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowItem
     */
    select?: Prisma.BorrowItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BorrowItem
     */
    omit?: Prisma.BorrowItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BorrowItemInclude<ExtArgs> | null;
    where?: Prisma.BorrowItemWhereInput;
    orderBy?: Prisma.BorrowItemOrderByWithRelationInput | Prisma.BorrowItemOrderByWithRelationInput[];
    cursor?: Prisma.BorrowItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BorrowItemScalarFieldEnum | Prisma.BorrowItemScalarFieldEnum[];
};
/**
 * Borrow without action
 */
export type BorrowDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrow
     */
    select?: Prisma.BorrowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Borrow
     */
    omit?: Prisma.BorrowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BorrowInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Borrow.d.ts.map