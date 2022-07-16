import React from "react";

export default function About({ theme }) {
	return (
		<section
			id="About"
			className={["", theme ? "bg-[#303336]" : "bg-[#E6E6E6]"].join(" ")}
		>
			<div className="w-full h-full lg:px-36 lg:py-44 flex lg:flex-row flex-col pb-20 pt-28 px-8">
				<div className="lg:w-1/3 h-full left-side-about">
					<div className="flex items-center justify-center">
						<img
							src="./images/motorcycle.jpeg"
							alt="congrats illustration"
							className="rounded-full w-80 h-80 "
						/>
					</div>
				</div>
				<div className="lg:w-2/3 h-full right-side-about lg:pl-14 mt-8 lg:mt-0 px-4 text-center lg:text-start">
					<div
						className={[
							"border-b pb-8",
							theme ? "border-b-white" : "border-b-black",
						].join(" ")}
					>
						<h1
							className={[
								"text-5xl",
								theme ? "text-[#DADADB]" : "text-[#303336]",
							].join(" ")}
						>
							About me
						</h1>
						<h2
							className={[
								"mt-1 opacity-70",
								theme ? "text-[#C4C4C5]" : "text-[#303336]",
							].join(" ")}
						>
							Fullstack web Developer
						</h2>
						<p
							className={[
								"mt-5 text-base",
								theme ? "text-[#C4C4C5]" : "text-[#303336]",
							].join(" ")}
						>
							When I'm not developing new software, you can expect to find me
							trying out different restaurants across the city. Yes! I'm a
							foodie so hit me up if you got recommendations! I love hole in a
							wall places! Other than being a foodie, I enjoy catching up on the
							latest news on the business world. One of my non-tech interests
							include Real Estate and the Stock Market.
						</p>
					</div>
					<div
						className={[
							"border-b pb-8 mt-5 justify-center",
							theme ? "border-b-white" : "border-b-black",
						].join(" ")}
					>
						<h1
							className={[
								"text-5xl",
								theme ? "text-[#DADADB]" : "text-[#303336]",
							].join(" ")}
						>
							What I do
						</h1>
						<p
							className={[
								"mt-5 text-base",
								theme ? "text-[#C4C4C5]" : "text-[#303336]",
							].join(" ")}
						>
							When I'm not developing new software, you can expect to find me
							trying out different restaurants across the city. Yes! I'm a
							foodie so hit me up if you got recommendations! I love hole in a
							wall places! Other than being a foodie, I enjoy catching up on the
							latest news on the business world. One of my non-tech interests
							include Real Estate and the Stock Market.
						</p>
						<button
							type="button"
							className={[
								"btn-right cursor-pointer py-2 px-4 rounded leading-6 font-normal text-center whitespace-nowrap border transition mt-7",
								theme
									? " text-[#C4C4C5] hover:bg-[#C4C4C5] border-[#C4C4C5] hover:text-[#303336]"
									: "border-[#303336] text-[#303336] hover:bg-[#303336] hover:text-[#C4C4C5]",
							].join(" ")}
						>
							Download Resume
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
