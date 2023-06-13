import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import Login from "@/components/Login";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default async function SessionControl({ children }) {
	const session = await getServerSession(authOptions);

	if (!session) {
		return (
			<main className="w-screen h-screen bg-[#393646] flex items-center">
				<div className="text-center w-full">
					<Login />
				</div>
			</main>
		);
	}
	return (
		<div className="w-screen h-screen bg-[#393646] flex">
			<NavBar />
			<div className="bg-primary-beige mt-2 mr-2 mb-2 flex-grow rounded-lg p-2 text-primary-body ">
				<div className="flex items-center gap-4 pr-2 justify-end ">
					<h4>
						Hello, <b>{session.user.name}</b>
					</h4>
					<Image
						src={session.user?.image}
						width={40}
						height={40}
						alt={session.user.name}
						className="rounded-full"
					/>
				</div>
				<div className="mt-14">{children}</div>
			</div>
		</div>
	);
}
