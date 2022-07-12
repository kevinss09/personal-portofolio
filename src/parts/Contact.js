import React from "react";

export default function Contact() {
	return (
		<section id="Contact">
			<div className="min-h-screen bg-gray-700">
				<div className="h-full w-full md:px-60 md:py-44 pt-16  text-center">
					<h1 className="text-5xl font-bold text-[#d9d9d9]">Contacts</h1>
					<div className="h-full w-full md:mt-12 flex md:flex-row flex-col-reverse">
						<div className="w-full md:w-1/2 bg-yellow-300 inline-block h-96">
							<p className="w-full h-full">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.0758150577067!2d-123.05733078441817!3d49.23705178192385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548676a21d7c44bd%3A0x16dbd773c6ca449f!2s5234%20Clarendon%20St%2C%20Vancouver%2C%20BC%20V5R%203J8!5e0!3m2!1sen!2sca!4v1657591661129!5m2!1sen!2sca"
									className="h-full w-full"
								></iframe>
							</p>
						</div>
						<div className="w-full md:w-1/2 bg-gray-700 h-96  md:pl-12 md:px-4 pt-12 text-center md:text-start">
							<h3 className="text-4xl text-white">Contact Details</h3>
							<h5 className="text-xl text-white mt-9 opacity-70">
								Kevin Sugeng
							</h5>
							<h5 className="text-xl text-white mt-2 opacity-70">
								5234 Clarendon Street
							</h5>
							<h5 className="text-xl text-white mt-2 opacity-70">
								Vancouver BC, V5R 3J8
							</h5>
							<h5 className="text-xl text-white mt-2 opacity-70">
								+1 (236) 668 4089
							</h5>
							<h5 className="text-xl text-white mt-2 opacity-70">
								kevinsugeng@gmail.com
							</h5>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
