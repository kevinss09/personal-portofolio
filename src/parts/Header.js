import React, { useState } from "react";

export default function Header() {
	const [toggle, setToggle] = useState(false);
	return (
		<nav className="bg-white p-3 shadow md:flex md:items-center md:justify-between fixed top-0 left-0 w-screen z-50">
			<div className="left-side flex items-center justify-between">
				<a to="/" className="cursor-pointer">
					<span className="text-1xl font-heading text-black">
						<img
							src="/images/closeImage.jpg"
							className="inline h-8 w-8 mr-2 ml-3 rounded-full"
							alt="People emoji"
						/>
					</span>
				</a>

				<span
					className="text-3xl right-0 pt-1 md:hidden block cursor-pointer"
					onClick={() => setToggle((prev) => !prev)}
				>
					<ion-icon
						name={toggle ? "close" : "menu"}
						className="duration-300"
					></ion-icon>
				</span>
			</div>

			<ul
				className={[
					"right-side md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 px-2 md:mr-12 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-300 text-center",
					toggle ? "opacity-100 top-[0px]" : "",
				].join(" ")}
			>
				<li className="mx-4 my-4 py-2 md:my-0 md:border-0 border border-b-black border-t-transparent border-l-transparent border-r-transparent">
					<a
						href="#"
						className="text-xl font-[Poppins] font-medium hover:text-blue-800 duration-300 "
					>
						Home
					</a>
				</li>
				<li className="mx-4 my-4 pb-2 md:pt-2 md:my-0 md:border-0 border border-b-black border-t-transparent border-l-transparent border-r-transparent">
					<a
						href="#About"
						className="text-xl font-[Poppins] font-medium hover:text-blue-800 duration-300"
					>
						About
					</a>
				</li>
				<li className="mx-4 my-4 pb-2 md:pt-2 md:my-0 md:border-0 border border-b-black border-t-transparent border-l-transparent border-r-transparent">
					<a
						href="#Resume"
						className="text-xl font-[Poppins] font-medium hover:text-blue-800 duration-300"
					>
						Resume
					</a>
				</li>

				<a
					href="#Contact"
					className="bg-transparent border border-black hover:bg-blue-300 px-6 py-1 text-black duration-500 mx-4 font-heading rounded-sm text-xl mb-4 mt-4 md:mt-0 md:mb-0 hover:text-blue-800"
				>
					Contact me
				</a>
			</ul>
		</nav>
	);
}
