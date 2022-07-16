import React from "react";

export default function Contact({ theme }) {
	return (
		<section id="Contact">
			<div
				className={[
					"min-h-screen",
					theme ? "bg-[#1D1E20]" : "bg-[#F5F5F5]",
				].join(" ")}
			>
				<div className="h-full w-full lg:px-60 lg:pb-44 lg:pt-32 pt-16  text-center">
					<h1
						className={[
							"text-5xl font-bold",
							theme ? "text-white" : "text-[#1D1E20]",
						].join(" ")}
					>
						Contacts
					</h1>
					<div className="h-full w-full lg:mt-24 flex lg:flex-row flex-col-reverse">
						{/* there should be skeleton in here but im so lazy to d it tbh*/}
						<div className="w-full lg:w-1/2 bg-[#cccccc] inline-block h-96">
							<p className="w-full h-full">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.0758150577067!2d-123.05733078441817!3d49.23705178192385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548676a21d7c44bd%3A0x16dbd773c6ca449f!2s5234%20Clarendon%20St%2C%20Vancouver%2C%20BC%20V5R%203J8!5e0!3m2!1sen!2sca!4v1657591661129!5m2!1sen!2sca"
									className="h-full w-full"
								></iframe>
							</p>
						</div>
						<div
							className={[
								"w-full lg:w-1/2 h-96  lg:pl-12 lg:px-4 pt-12 text-center lg:text-start",
								theme ? "bg-[#1D1E20]" : "bg-[#F5F5F5]",
							].join(" ")}
						>
							<h3
								className={[
									"text-4xl",
									theme ? "text-[#F5F5F5]" : "text-[#1D1E20]",
								].join(" ")}
							>
								Contact Details
							</h3>
							<h5
								className={[
									"text-xl text-white mt-9 opacity-70",
									,
									theme ? "text-[#F5F5F5]" : "text-[#1D1E20]",
								].join(" ")}
							>
								Kevin Sugeng
							</h5>
							<h5
								className={[
									"text-xl text-white mt-2 opacity-70",
									theme ? "text-[#F5F5F5]" : "text-[#1D1E20]",
								].join(" ")}
							>
								5234 Clarendon Street
							</h5>
							<h5
								className={[
									"text-xl text-white mt-2 opacity-70",
									theme ? "text-[#F5F5F5]" : "text-[#1D1E20]",
								].join(" ")}
							>
								Vancouver BC, V5R 3J8
							</h5>
							<h5
								className={[
									"text-xl text-white mt-2 opacity-70",
									theme ? "text-[#F5F5F5]" : "text-[#1D1E20]",
								].join(" ")}
							>
								+1 (236) 668 4089
							</h5>
							<h5
								className={[
									"text-xl text-white mt-2 opacity-70",
									theme ? "text-[#F5F5F5]" : "text-[#1D1E20]",
								].join(" ")}
							>
								kevinsugeng@gmail.com
							</h5>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
