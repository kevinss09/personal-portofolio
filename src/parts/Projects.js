import React from "react";
import { Link } from "react-scroll";

export default function Projects({ theme }) {
	return (
		<section id="Projects">
			<div
				className={[
					"min-h-screen",
					theme ? "bg-[#303336]" : "bg-[#E6E6E6]",
				].join(" ")}
			>
				<div className="h-full w-full lg:px-60 lg:pb-44 lg:pt-32 py-16 px-10 text-center">
					<h1
						className={[
							"text-5xl font-bold",
							theme ? "text-white" : "text-[#303336]",
						].join(" ")}
					>
						Projects
					</h1>
					<div className="grid lg:grid-cols-3 grid-cols-1 gap-8 mt-16">
						{/* Start one card of the object  */}
						<div className="flex items-center justify-center my-4 relative">
							<div
								className={[
									"card overflow-hidden rounded-2xl w-64 h-80 transition-all hover:scale-105",
									theme ? "bg-white" : "bg-white",
								].join(" ")}
							>
								<div className="card-header h-36 overflow-hidden bg-white ">
									<a
										href="https://github.com/kevinss09/personal-portofolio"
										target="_blank"
										className="no-underline"
									>
										<img
											src="/images/personal-website.png"
											alt="my web"
											className="w-full block opacity-100"
										/>
									</a>
								</div>
								<div className="card-body relative h-60 p-5 hover:h-[280px]">
									<h2 className="card-title m-0 pb-3 text-xl font-bold uppercase text-black">
										<a
											href="https://github.com/kevinss09/personal-portofolio"
											target="_blank"
										>
											Portofolio
										</a>
									</h2>
									<div className="card-subtitle m-0 text-lg pb-3">
										Website created using React and Tailwind css
									</div>
									<p className="card-description absolute left-5 right-5 m-0 p-0 text-[#666C74] opacity-0 bottom-10">
										This a my personal portofolio website that contains my
										Contact information, Resume, and Projects.
									</p>
								</div>
							</div>
						</div>
						{/* End of one card  */}

						{/* Start one card of the object  */}
						<div className="flex items-center justify-center my-4 relative">
							<div
								className={[
									"card overflow-hidden rounded-2xl w-64 h-80 transition-all hover:scale-105",
									theme ? "bg-white" : "bg-white",
								].join(" ")}
							>
								<div className="card-header h-36 overflow-hidden bg-white ">
									<a
										href="https://github.com/kevinss09/daily-blog"
										className="no-underline"
										target="_blank"
									>
										<img
											src="/images/blog-web.png"
											alt="myBlog"
											className="w-full block opacity-100"
										/>
									</a>
								</div>
								<div className="card-body relative h-60 p-5 hover:h-[280px]">
									<h2 className="card-title m-0 pb-3 text-black text-xl font-bold uppercase">
										<a
											href="https://github.com/kevinss09/daily-blog"
											target="_blank"
										>
											blog Website
										</a>
									</h2>
									<div className="card-subtitle m-0 text-lg pb-3">
										blog Website created using MERN Stack + Tailwind
									</div>
									<p className="card-description absolute left-5 right-5 m-0 p-0 text-[#666C74] opacity-0 bottom-10">
										This a blog website that basically useful to recap the
										things that you already learn.
									</p>
								</div>
							</div>
						</div>
						{/* End of one card  */}

						{/* Start one card of the object  */}
						<div className="flex items-center justify-center my-4 relative">
							<div
								className={[
									"card overflow-hidden rounded-2xl w-64 h-80 transition-all hover:scale-105",
									theme ? "bg-white" : "bg-white",
								].join(" ")}
							>
								<div className="card-header h-36 overflow-hidden bg-white ">
									<a
										href="https://github.com/kevinss09/food-commerce-web"
										className="no-underline"
										target="_blank"
									>
										<img
											src="/images/e-commerce-web.png"
											alt="my web"
											className="w-full block opacity-100"
										/>
									</a>
								</div>
								<div className="card-body relative h-60 p-5 hover:h-[280px]">
									<h2 className="card-title m-0 pb-3 text-black text-xl font-bold uppercase">
										<a
											href="https://github.com/kevinss09/food-commerce-web"
											target="_blank"
										>
											e commerce Web
										</a>
									</h2>
									<div className="card-subtitle m-0 text-lg pb-3">
										Website created using React, Redux, Tailwind, and API
									</div>
									<p className="card-description absolute left-5 right-5 m-0 p-0 text-[#666C74] opacity-0 bottom-10">
										It's a e commerce website that sell various furniture for
										household needs.
									</p>
								</div>
							</div>
						</div>
						{/* End of one card  */}
					</div>
				</div>
			</div>
		</section>
	);
}
