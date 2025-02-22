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

export const jsend = {
	success<T>(data: T): JSend.JSendSuccessObject<T> {
		const jsd: JSend.JSendSuccess<T> = { status: "success", data };
		return { ...jsd, toString: () => JSON.stringify(jsd) }
	},

	fail<T>(data: T): JSend.JSendFailObject<T> {
		const jsd: JSend.JSendFail<T> = { status: "fail", data };
		return { ...jsd, toString: () => JSON.stringify(jsd) }
	},

	error<C extends number | string | undefined = undefined, T = undefined>(message: string, code: C | undefined = undefined, data: T | undefined = undefined): JSend.JSendErrorObject<C, T> {
		const jsd: JSend.JSendError<C, T> = { status: "error", message };

		if (typeof code === 'string' || typeof code === 'number') jsd.code = code;
		if (data !== undefined) jsd.data = data;

		return { ...jsd, toString: () => JSON.stringify(jsd) }
	}
}