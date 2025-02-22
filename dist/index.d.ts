export declare namespace JSend {
    interface JSendSuccess<T> {
        status: "success";
        data: T;
    }
    interface JSendSuccessObject<T> extends JSendSuccess<T> {
        toString(): string;
    }
    interface JSendFail<U> {
        status: "fail";
        data: U;
    }
    interface JSendFailObject<U> extends JSendFail<U> {
        toString(): string;
    }
    interface JSendError<C extends number | string | undefined, D> {
        status: "error";
        message: string;
        code?: C;
        data?: D;
    }
    interface JSendErrorObject<C extends number | string | undefined = undefined, D = undefined> extends JSendError<C, D> {
        toString(): string;
    }
    type JSend<T = string, U = string, C extends number | string | undefined = undefined, D = undefined> = JSendSuccess<T> | JSendFail<U> | JSendError<C, D>;
    type JSendObject<T = string, U = string, C extends number | string | undefined = undefined, D = undefined> = JSendSuccessObject<T> | JSendFailObject<U> | JSendErrorObject<C, D>;
}
export declare const jsend: {
    success<T>(data: T): JSend.JSendSuccessObject<T>;
    fail<U>(data: U): JSend.JSendFailObject<U>;
    error<C extends number | string | undefined = undefined, D = undefined>(message: string, code?: C | undefined, data?: D | undefined): JSend.JSendErrorObject<C, D>;
};
//# sourceMappingURL=index.d.ts.map