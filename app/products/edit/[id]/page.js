import EditPage from "@/components/EditPage";
import React from "react";

const Edit = async ({ params }) => {
	const id = params.id;

	return <EditPage id={id} />;
};

export default Edit;
