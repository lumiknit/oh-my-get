/** HTTP1 Methods */
export const h1Methods: string[] = [
	"GET",
	"POST",
	"PUT",
	"DELETE",
	"HEAD",
	"CONNECT",
	"OPTIONS",
	"TRACE",
	"PATCH",
];

/** HTTP1 Header */
export type H1HeaderItem = {
	name: string;
	value: string;
};

export type H1BytesBody = {
	type: "bytes";
	data: Uint8Array;
};

export type H1TextBody = {
	type: "text";
	data: string;
};

export type H1FileBody = {
	type: "file";
	data: File;
};

export type H1BodyItem = H1BytesBody | H1TextBody | H1FileBody;
export type H1Body = H1BodyItem[];

export type H1Request = {
	method: string;
	url: string;
	headers: H1HeaderItem[];
	body: H1Body;
};

export type H1Response = {
	statusCode: number;
	statusText: string;
	headers: H1HeaderItem[];
	body: H1Body;
};
