"use client";
import Button from "@/components/Button";
import axios from "axios";
import React, { useState } from "react";
import base from "@/app/base";
import { useRouter } from "next/navigation";

const AddProduct = () => {
	const [name, setName] = useState("");
	const [desc, setDesc] = useState("");
	const [price, setPrice] = useState("");

	const router = useRouter();

	// MONGODB POST BUT NOT WORKING
	const createProduct = async (e) => {
		e.preventDefault();
		// const posts = { name, desc, price };
		const response = await fetch("/api/products", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, desc, price }),
		});
		await response.json();
		router.push("/products");
	};

	// AXIOS CONNECTION DOESNT WORK
	// const createProduct = async (e) => {
	// 	e.preventDefault();
	// 	const data = { name, desc, price };
	// 	await axios.post("/api/products", data);
	// };

	// AIRTABLE CONNECTION
	// const createProduct = (e) => {
	// 	e.preventDefault();
	// 	const Name = name;
	// 	const Price = price;
	// 	const Desc = desc;
	// 	base("admin").create(
	// 		{
	// 			Name,
	// 			Price,
	// 			Desc,
	// 		},
	// 		function (err, records) {
	// 			if (err) {
	// 				console.error(err);
	// 				return;
	// 			}

	// 		}
	// 	);
	// 	router.push("/products");
	// };
	return (
		<div>
			<h1>New Product</h1>
			<form onSubmit={createProduct} className="flex flex-col gap-y-2">
				<label>Product Name</label>
				<input
					type="text"
					placeholder="product name"
					value={name}
					onChange={(ev) => setName(ev.target.value)}
				/>
				<label>Price</label>
				<input
					type="number"
					placeholder="price"
					value={price}
					onChange={(ev) => setPrice(ev.target.value)}
				/>
				<label>Photos</label>
				<label>Description</label>
				<textarea
					type="text"
					placeholder="product description"
					value={desc}
					onChange={(ev) => setDesc(ev.target.value)}
				/>
				<label>Photos</label>
				<Button title="Send" type="submit" />
			</form>
		</div>
	);
};

export default AddProduct;
