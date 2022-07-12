import React from "react";

export default function About() {
	return (
		<section id="About" className="bg-white">
			<div className="w-full h-full md:px-36 md:py-44 flex md:flex-row flex-col py-20 px-8">
				<div className="md:w-1/3 h-full left-side-about">
					<div className="flex items-center justify-center">
						<img
							src="./images/motorcycle.jpeg"
							alt="congrats illustration"
							className="rounded-full w-80 h-80 "
						/>
					</div>
				</div>
				<div className="md:w-2/3 h-full right-side-about md:pl-14 mt-8 md:mt-0 px-4 text-center md:text-start">
					<div className=" border border-b-black border-r-transparent border-l-transparent border-t-transparent pb-8">
						<h1 class="text-5xl text-gray-700">About me</h1>
						<h2 className="mt-1 text-gray-700 opacity-70">
							Fullstack web Developer
						</h2>
						<p className="mt-5 text-gray-700 text-base">
							When I'm not developing new software, you can expect to find me
							trying out different restaurants across the city. Yes! I'm a
							foodie so hit me up if you got recommendations! I love hole in a
							wall places! Other than being a foodie, I enjoy catching up on the
							latest news on the business world. One of my non-tech interests
							include Real Estate and the Stock Market.
						</p>
					</div>
					<div className="border border-b-black border-r-transparent border-l-transparent border-t-transparent pb-8 mt-5 justify-center">
						<h1 class="text-5xl text-gray-700">What I do</h1>
						<p className="mt-5 text-gray-700 text-base">
							When I'm not developing new software, you can expect to find me
							trying out different restaurants across the city. Yes! I'm a
							foodie so hit me up if you got recommendations! I love hole in a
							wall places! Other than being a foodie, I enjoy catching up on the
							latest news on the business world. One of my non-tech interests
							include Real Estate and the Stock Market.
						</p>
						<button
							type="button"
							class="btn-right text-white bg-gray-700 hover:bg-white hover:text-gray-700 cursor-pointer py-2 px-4 rounded leading-6 font-normal text-center whitespace-nowrap border hover:border-gray-700 transition mt-7"
						>
							Download Resume
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
