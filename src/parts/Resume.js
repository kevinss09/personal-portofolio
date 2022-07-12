import React from "react";

export default function Resume() {
	return (
		<section id="Resume">
			<div className="min-h-screen bg-gray-700 ">
				<div className="h-full w-full md:px-60 md:py-44 py-16 px-10 md:text-start text-center">
					<h1 className="text-5xl font-bold text-white">Resume</h1>
					<div className="flex flex-col w-full h-full mt-12 md:pr-7 md:text-start text-center">
						<div
							id="Education"
							className="w-full h-full flex items-start pb-12 md:flex-row flex-col border-b border-b-white "
						>
							<div className="left-side-education md:w-1/3 w-full">
								<h3 className="text-white underline-offset-2 font-semibold md:text-2xl text-3xl">
									Education
								</h3>
							</div>
							<div className="right-side-education md:w-2/3 mt-4 md:mt-0 w-full text-start md:text-center">
								<div
									id="Education"
									className="flex items-center justify-start flex-col md:w-96"
								>
									<div className="flex items-center justify-start w-full md:flex-row flex-col">
										<div className=" md:w-10 md:h-10 w-16 h-16 md:mr-5 flex items-center justify-center">
											<img
												src="/images/columbia-college-logo.png"
												alt=""
												className=""
											/>
										</div>
										<h4 className="md:text-3xl text-xl font-bold text-white md:mt-0 mt-5">
											Columbia College
										</h4>
									</div>
									<p className="md:pl-[65px] mt-1 opacity-70 text-white text-sm italic w-full pr-13 md:text-start text-center">
										Diploma in Computer Science • 2023
									</p>
								</div>
							</div>
						</div>
						<div
							id="Work"
							className="w-full h-full flex items-start justify-between md:flex-row flex-col py-16 border-b border-b-white"
						>
							<div className="left-side-work md:w-1/3 w-full text-center md:text-start">
								<h3 className="text-white underline-offset-2 font-semibold md:text-2xl text-3xl">
									Work
								</h3>
							</div>
							<div className="right-side-work md:w-2/3 mt-4 md:mt-0">
								<div
									id="Education"
									className="flex items-start justify-start flex-col"
								>
									<h4 className="md:text-3xl text-2xl font-bold text-white md:text-start text-center">
										Freelance Fullstack Website Developer
									</h4>
									<p
										className="mt-1 opacity-50
									 text-white text-sm italic w-full md:text-start text-center"
									>
										Fullstack engineer • January 2022 - Present
									</p>
									<p className="mt-10 text-white opacity-80 text-sm md:text-base">
										Spearheaded and designed the Felix Checkout project as a
										Technical Lead with a focus in overall security and
										efficiency
									</p>
									<p className="mt-7 text-white opacity-80 text-sm md:text-base">
										Developed application using MERN (MongoDB, Express, React +
										Redux, Node JS) stack to provide better scalability and
										performance.
									</p>
									<p className="mt-7 text-white opacity-80 text-sm md:text-base">
										Created and ran UI automation test cases using Java and
										Maven to reduce the need for manual testing.
									</p>
									<p className="mt-7 text-white opacity-80 text-sm md:text-base">
										Developed and implemented WCF Web Services using C# and
										ASP.NET for medical web applications.
									</p>
								</div>
							</div>
						</div>
						<div
							id="Skills"
							className="w-full h-full flex items-start justify-between md:flex-row flex-col py-16 border-b border-b-white"
						>
							<div className="left-side-work md:w-1/3 w-full">
								<h3 className="text-white underline-offset-2 font-semibold md:text-2xl text-3xl">
									Skills
								</h3>
							</div>
							<div className="right-side-work md:w-2/3 mt-4 md:mt-0 w-full">
								<div
									id="Skill"
									className="flex md:items-start md:justify-start items-center justify-center flex-col"
								>
									{/* Front end  */}
									<h4 className="text-3xl font-bold text-white md:text-start w-full">
										Front End
									</h4>
									<ul className="mt-6">
										<div className="flex md:flex-row flex-col">
											<div className="mx-4">
												<li className="text-white text-md list-disc my-1">
													HTML
												</li>
												<li className="text-white text-md list-disc my-1">
													CSS
												</li>
												<li className="text-white list-disc my-1 text-md">
													Javascript
												</li>
											</div>
											<div className="md:ml-48 mx-4 ">
												<li className="text-white text-md list-disc my-1">
													React JS
												</li>
												<li className="text-white text-md list-disc my-1">
													Redux
												</li>
												<li className="text-white text-md list-disc my-1">
													TailwindCSS
												</li>
											</div>
										</div>
									</ul>
									{/* Front end end  */}

									{/* Back end  */}
									<h4 className="text-3xl font-bold text-white text-start mt-12">
										Back End
									</h4>
									<ul className="mt-6">
										<div className="flex flex-row">
											<div className="mx-4 ">
												<li className="text-white text-md list-disc my-1">
													Node JS
												</li>
												<li className="text-white text-md list-disc my-1">
													Express JS
												</li>
												<li className="text-white list-disc my-1 text-md">
													MongoDB
												</li>
											</div>
										</div>
									</ul>
									{/* Back end done  */}

									{/* Others */}
									<h4 className="text-3xl font-bold text-white text-start mt-12">
										Others
									</h4>
									<ul className="mt-6">
										<div className="flex flex-row">
											<div className="mx-4 ">
												<li className="text-white text-md list-disc my-1">
													Python
												</li>
												<li className="text-white text-md list-disc my-1">
													C++
												</li>
												<li className="text-white list-disc my-1 text-md">
													Git
												</li>
											</div>
										</div>
									</ul>
									{/* End others  */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
