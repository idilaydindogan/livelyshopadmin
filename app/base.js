const Airtable = require("airtable");

const base = new Airtable({
	apiKey: `${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
}).base("app8zhzFouTkSkrC7");

export default base;
