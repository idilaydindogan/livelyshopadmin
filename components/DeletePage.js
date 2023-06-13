"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const DeletePage = ({ id }) => {
	const [product, setProduct] = useState([]);
	const router = useRouter();
	useEffect(() => {
		axios.get(`/api/products/${id}`).then((response) => {
			setProduct(response.data);
		});
	}, [id]);

	// AXIOS CONNECTION
	const deleteProduct = async () => {
		await axios.delete(`/api/products/${id}`);
		router.push("/products");
	};

	return (
		<div className="p-5">
			<h1>
				Do you want to delete <span>"{product.name}"?</span>
			</h1>
			<div className="space-x-2">
				<button className="btn-red" onClick={deleteProduct}>
					Yes
				</button>
				<button
					className="bg-secondary-green text-white px-3 py-1 rounded-md"
					onClick={() => router.push("/products")}
				>
					No
				</button>
			</div>
		</div>
	);
};

export default DeletePage;
