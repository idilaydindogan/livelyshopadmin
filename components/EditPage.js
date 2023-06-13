"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { AiOutlineUpload } from "react-icons/ai";

const EditPage = ({ id }) => {
	const [product, setProduct] = useState([]);
	const [name, setName] = useState("");
	const [desc, setDesc] = useState("");
	const [price, setPrice] = useState("");
	const router = useRouter();

	useEffect(() => {
		axios.get(`/api/products/${id}`).then((response) => {
			setProduct(response.data);
			setName(response.data.name);
			setDesc(response.data.desc);
			setPrice(response.data.price);
		});
	}, [id]);

	// EDITING
	const editProduct = async (e) => {
		e.preventDefault();
		await axios.put(`/api/products/${id}`, { id, name, desc, price });
		router.push("/products");
	};

	//UPLOADING PHOTO
	// const uploadImage = async (e) => {
	// 	const files = e.target?.files;
	// 	if (files) {
	// 		const data = new FormData();
	// 		for (const file of files) {
	// 			data.append("file", file);
	// 		}
	// 		const response = await fetch("/api/upload", {
	// 			method: "POST",
	// 			body: data,
	// 			headers: { "Custom-Header": "value" },
	// 		});
	// 		await response.json();
	// 	}
	// };

	// const uploadImage = async (e) => {
	// 	const files = e.target?.files;
	// 	const data = new FormData();
	// 	data.append("file", files);
	// 	console.log(data);
	// 	const response = await fetch("/api/upload", {
	// 		method: "POST",
	// 		body: data,
	// 		headers: { "Custom-Header": "value" },
	// 	});

	// 	return;
	// };

	const uploadImage = async (e) => {
		const files = e.target?.files[0];
		console.log(files);
		const data = new FormData();

		data.append("file", files);

		await axios.post("/api/upload", data);
		console.log(data);
	};

	// if (files?.length > 0) {
	// 	const data = new FormData();
	// 	for (const file of files) {
	// 		data.append("file", file);
	// 	}
	// 	const res = await axios.post("/api/upload", data);
	// 	console.log(res.data);
	// }

	return (
		<div className="p-5">
			<h2 className="text-center pb-3">Edit Products</h2>
			<form onSubmit={editProduct} className="flex flex-col gap-y-2">
				<label>Product Name</label>
				<input
					id="name"
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<label>Price</label>
				<input
					id="price"
					type="number"
					value={price}
					onChange={(e) => setPrice(e.target.value)}
				/>
				<label>Photos</label>
				<div>
					<label className="cursor-pointer w-32 h-32 border border-secondary-shade flex flex-col items-center justify-center text-secondary-shade rounded-md">
						<AiOutlineUpload className="text-xl" />
						<p className="text-sm">Upload</p>
						<input type="file" className="hidden" onChange={uploadImage} />
					</label>
					{!product.image && (
						<div className="mt-2">No photos available for this product.</div>
					)}
				</div>
				<label>Description</label>
				<textarea
					id="desc"
					type="text"
					value={desc}
					onChange={(e) => setDesc(e.target.value)}
				/>

				<Button title="Submit" type="submit" />
			</form>
		</div>
	);
};

export default EditPage;

// <form>

// 	<Button title="Send" type="submit" />
// </form
