import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Products";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
	await mongooseConnect();
	if (request.method === "GET") {
		if (params.id) {
			const productDoc = await Product.findOne({ _id: params.id });
			return NextResponse.json(productDoc);
		} else {
			return NextResponse.json("ERROR");
		}
	}
}

export async function PUT(request, { params }) {
	await mongooseConnect();
	if (request.method === "PUT") {
		const { name, desc, price, _id } = await request.json();
		const productDoc = await Product.updateOne(
			{ _id: params.id },
			{ name, desc, price }
		);
		return NextResponse.json(productDoc);
	}
}
export async function DELETE(request, { params }) {
	await mongooseConnect();
	if (request.method === "DELETE") {
		if (params.id) {
			const productDoc = await Product.deleteOne({ _id: params.id });
			return NextResponse.json(productDoc);
		} else {
			return NextResponse.json("ERROR");
		}
	}
}
