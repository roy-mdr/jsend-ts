export declare namespace JSend {
    interface JSendSuccess<T> {
        status: "success";
        data: T;
    }
    interface JSendSuccessObject<T> extends JSendSuccess<T> {
        toString(): string;
    }
    interface JSendFail<T> {
        status: "fail";
        data: T;
    }
    interface JSendFailObject<T> extends JSendFail<T> {
        toString(): string;
    }
    interface JSendError<C extends number | string | undefined, T> {
        status: "error";
        message: string;
        code?: C;
        data?: T;
    }
    interface JSendErrorObject<C extends number | string | undefined = undefined, T = undefined> extends JSendError<C, T> {
        toString(): string;
    }
    type JSend<T = string, U = string, C extends number | string | undefined = undefined, D = undefined> = JSendSuccess<T> | JSendFail<U> | JSendError<C, D>;
    type JSendObject<T = string, U = string, C extends number | string | undefined = undefined, D = undefined> = JSendSuccessObject<T> | JSendFailObject<U> | JSendErrorObject<C, D>;
}
export declare const jsend: {
    success<T>(data: T): JSend.JSendSuccessObject<T>;
    fail<T>(data: T): JSend.JSendFailObject<T>;
    error<C extends number | string | undefined = undefined, T = undefined>(message: string, code?: C | undefined, data?: T | undefined): JSend.JSendErrorObject<C, T>;
};
//# sourceMappingURL=index.d.ts.map