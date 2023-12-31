import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	desc: { type: String },
});

export const Product = models.Product || model("Product", ProductSchema);
