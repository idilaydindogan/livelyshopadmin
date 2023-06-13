"use client";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
	const { data: session } = useSession();

	return (
		<div>
			<button
				className="bg-primary-beige p-2 px-4 rounded-md text-primary-body"
				onClick={() => signIn("google")}
			>
				Login with Google
			</button>
		</div>
	);
};

export default Login;
