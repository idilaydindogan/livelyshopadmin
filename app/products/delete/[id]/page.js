import DeletePage from "@/components/DeletePage";
import React from "react";

const Delete = ({ params }) => {
	const id = params.id;
	return (
		<div>
			<DeletePage id={id} />
		</div>
	);
};

export default Delete;
