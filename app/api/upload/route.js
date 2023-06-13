import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Products";
import { NextResponse } from "next/server";
import multiparty from "multiparty";

export const config = {
	api: { bodyParser: false },
};

export async function POST(request) {
	const form = new multiparty.Form();
	const { fields, files } = await new Promise((resolve, reject) => {
		form.parse(request, (err, fields, files) => {
			if (err) reject(err);
			resolve({ fields, files });
		});
	});
	console.log(files);

	return NextResponse.json("OK");
}
