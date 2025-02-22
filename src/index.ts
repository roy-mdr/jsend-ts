export namespace JSend {
	export interface JSendSuccess<T> {
		status: "success";
		data: T;
	}

	export interface JSendSuccessObject<T> extends JSendSuccess<T> {
		toString(): string;
	}

	export interface JSendFail<U> {
		status: "fail";
		data: U;
	}

	export interface JSendFailObject<U> extends JSendFail<U> {
		toString(): string;
	}

	export interface JSendError<C extends number | string | undefined, D> {
		status: "error";
		message: string;
		code?: C;
		data?: D;
	}

	export interface JSendErrorObject<C extends number | string | undefined = undefined, D = undefined> extends JSendError<C, D> {
		toString(): string;
	}

	export type JSend<T = string, U = string, C extends number | string | undefined = undefined, D = undefined> = JSendSuccess<T> | JSendFail<U> | JSendError<C, D>;
	export type JSendObject<T = string, U = string, C extends number | string | undefined = undefined, D = undefined> = JSendSuccessObject<T> | JSendFailObject<U> | JSendErrorObject<C, D>;
}

export const jsend = {
	success<T>(data: T): JSend.JSendSuccessObject<T> {
		const jsd: JSend.JSendSuccess<T> = { status: "success", data };
		return { ...jsd, toString: () => JSON.stringify(jsd) }
	},

	fail<U>(data: U): JSend.JSendFailObject<U> {
		const jsd: JSend.JSendFail<U> = { status: "fail", data };
		return { ...jsd, toString: () => JSON.stringify(jsd) }
	},

	error<C extends number | string | undefined = undefined, D = undefined>(message: string, code: C | undefined = undefined, data: D | undefined = undefined): JSend.JSendErrorObject<C, D> {
		const jsd: JSend.JSendError<C, D> = { status: "error", message };

		if (typeof code === 'string' || typeof code === 'number') jsd.code = code;
		if (data !== undefined) jsd.data = data;

		return { ...jsd, toString: () => JSON.stringify(jsd) }
	}
}