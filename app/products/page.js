import Button from "@/components/Button";
import Link from "next/link";
import React from "react";
import base from "@/app/base";
import ListProducts from "@/components/ListProducts";

// AIRTABLE BACKUP FETCH
// const url = `https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID}/admin`;

// const fetchData = async () => {
// 	const response = await fetch(url, {
// 		headers: {
// 			Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
// 		},

// 		next: {
// 			revalidate: 60,
// 		},
// 	});
// 	const data = response.json();
// 	return data;
// };const results = await fetchData();

const Products = async () => {
	return (
		<div>
			<Link className="btn-primary" href={"/products/new"}>
				<Button title="Add New Product" />
			</Link>
			<ListProducts />
		</div>
	);
};

export default Products;
