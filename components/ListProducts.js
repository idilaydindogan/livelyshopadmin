"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

const ListProducts = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios.get("/api/products").then((response) => {
			setProducts(response.data);
		});
	}, []);

	return (
		<div className="p-5">
			<h2 className="text-center pb-3">List of Products</h2>
			<table className="basic">
				<thead>
					<tr>
						<td>Product Name</td>
						<td>Product Desc</td>
						<td>Price</td>
						<td>Edit</td>
					</tr>
				</thead>
				<tbody>
					{products.map((product) => (
						<tr key={product._id}>
							<td>{product.name}</td>
							<td>{product.desc}</td>
							<td>{product.price}</td>
							<td className="flex gap-1">
								<Link
									href={`/products/edit/${product._id}`}
									className="bg-secondary-shade text-sm rounded-md text-primary-beige px-1 py-0.5 inline-flex gap-1 items-center"
								>
									<BiEdit />
									Edit
								</Link>
								<Link
									href={`/products/delete/${product._id}`}
									className="bg-secondary-shade text-sm rounded-md text-primary-beige px-1 py-0.5 inline-flex gap-1 items-center"
								>
									<MdDeleteForever />
									Delete
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ListProducts;
