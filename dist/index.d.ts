declare namespace JSend {
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
    interface JSendError<T> {
        status: "error";
        message: string;
        code?: number | string;
        data?: T;
    }
    interface JSendErrorObject<T> extends JSendError<T> {
        toString(): string;
    }
    type JSend<T = string, U = string, V = string> = JSendSuccess<T> | JSendFail<U> | JSendError<V>;
    type JSendObject<T = string, U = string, V = string> = JSendSuccessObject<T> | JSendFailObject<U> | JSendErrorObject<V>;
}
export declare const jsend: {
    success<T>(data: T): JSend.JSendSuccessObject<T>;
    fail<T>(data: T): JSend.JSendFailObject<T>;
    error<T>(message: string, code?: number | string, data?: T): JSend.JSendErrorObject<T>;
};
export {};
//# sourceMappingURL=index.d.ts.map