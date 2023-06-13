import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Products";
import { NextResponse } from "next/server";

export async function POST(request) {
	await mongooseConnect();
	if (request.method === "POST") {
		const { name, desc, price } = await request.json();
		const productDoc = await Product.create({ name, desc, price });
		return NextResponse.json(productDoc);
	}
}

export async function GET(request) {
	await mongooseConnect();
	if (request.method === "GET") {
		const productDoc = await Product.find();
		return NextResponse.json(productDoc);
	}
}

// AIRTABLE FOR BACKUP
// export async function GET(req) {
// 	const response = await fetch(
// 		`https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID}/admin`,
// 		{
// 			headers: {
// 				Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
// 			},

// 			next: {
// 				revalidate: 60,
// 			},
// 		}
// 	);
// }
