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

export const jsend = {
	success<T>(data: T): JSend.JSendSuccessObject<T> {
		const jsd: JSend.JSendSuccess<T> = { status: "success", data };
		return { ...jsd, toString: () => JSON.stringify(jsd) }
	},

	fail<T>(data: T): JSend.JSendFailObject<T> {
		const jsd: JSend.JSendFail<T> = { status: "fail", data };
		return { ...jsd, toString: () => JSON.stringify(jsd) }
	},

	error<T>(message: string, code?: number | string, data?: T): JSend.JSendErrorObject<T> {
		const jsd: JSend.JSendError<T> = { status: "error", message };

		if (typeof code === 'string') { jsd.code = code; }
		else if (code) { jsd.code = parseInt(`${code}`); }

		if (data !== undefined) jsd.data = data;

		return { ...jsd, toString: () => JSON.stringify(jsd) }
	}
}