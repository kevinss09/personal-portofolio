import React from "react";
import { FaReact } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";

export default function Home() {
	return (
		<section id="home">
			<div className="min-h-screen md:h-screen bg-gray-700">
				<div className="h-full w-full md:px-32 md:pt-32 md:pb-0 flex md:flex-row flex-col-reverse">
					<div className="left-side md:w-1/2 h-full">
						<div className="py-20 px-11 md:pl-32 flex flex-col md:mt-9 my-6 text-center md:text-start">
							<h3 className="text-white text-3xl md:text-5xl">Hello,</h3>
							<h1 className="text-white text-5xl md:text-7xl font-bold">
								I'm Kevin
							</h1>
							<h5 className="text-white text-xl md:text-xl md:mt-1 mt-2">
								Fullstack WebApp Developer
							</h5>
							<p className="text-white text-sm mt-3">
								Over the last 2 years, I've worked as a freelance fullstack
								website developer in a team, helping different companies and
								start-ups to sucesfully reaching their maximum potential by
								providing the best websites and online system for them.
							</p>
							<div className="button mt-6 flex flex-row items-center justify-center">
								<button
									type="button"
									class="btn bg-gray-700 border border-white hover:bg-white hover:text-gray-700 flex flex-row items-center justify-center  cursor-pointer py-2 px-4 rounded leading-6 text-white font-normal text-center whitespace-nowrap transition"
								>
									<FaReact className="mr-2" />
									Projects
								</button>
								<button
									type="button"
									class="btn-right flex flex-row items-center justify-center text-white hover:text-gray-700 cursor-pointer py-2 px-4 rounded leading-6 font-normal text-center whitespace-nowrap ml-6 border border-white hover:bg-white transition"
								>
									<FcBusinessman className="mr-2 w-6 h-6" />
									About Me
								</button>
							</div>
						</div>
					</div>
					<div className="right-side md:w-1/2">
						<img
							src="/images/myself.jpeg"
							alt="picture of me"
							className="w-full h-full  object-contain"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
