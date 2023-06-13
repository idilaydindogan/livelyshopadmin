"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { BsShop } from "react-icons/bs";

const NavBar = () => {
	const pathname = usePathname();

	const inactiveLink = "";
	const activeLink = "bg-primary-beige text-primary-body rounded-l-lg p-1";

	return (
		<aside className="text-primary-beige p-4 pr-0">
			<Link href={"/"} className="flex gap-2 mb-6 mr-3">
				<BsShop className="text-2xl " />
				<h2 className="text-xl">LivelyShopAdmin</h2>
			</Link>

			<nav className="flex flex-col text-lg space-y-4">
				<Link
					href={"/"}
					className={pathname === "/" ? activeLink : inactiveLink}
				>
					Dashboard
				</Link>
				<Link
					href={"/products"}
					className={pathname === "/products" ? activeLink : inactiveLink}
				>
					Products
				</Link>
				<Link
					href={"/orders"}
					className={pathname === "/orders" ? activeLink : inactiveLink}
				>
					Orders
				</Link>
				<Link
					href={"/settings"}
					className={pathname === "/settings" ? activeLink : inactiveLink}
				>
					Settings
				</Link>
			</nav>
		</aside>
	);
};

export default NavBar;
