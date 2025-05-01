"use client";

import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Home() {
	const scrollToContact = () => {
		const contactSection = document.getElementById("contact-section");
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<main className="min-h-screen bg-white">
			{/* Hero Banner Section */}
			<section className="relative h-screen flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<div
						className="absolute inset-0 bg-white z-10"
						style={{
							backgroundImage: "url('/images/bg.jpg')",
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							boxShadow: "inset 0 0 100px rgba(0, 0, 0, 0.5)",
						}}
					/>
				</div>
				<div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
					{/* add background white rounded-lg  transparent*/}
					<div
						className="mb-8 bg-white rounded-lg p-9 shadow-lg opacity-90 
						transform transition-all duration-300 ease-in-out 
						hover:scale-105 hover:shadow-2xl hover:opacity-100
						hover:border hover:border-[#D4AF37]/20"
					>
						<Image
							src="/logo.svg"
							alt="Urban Rise Logo"
							width={400}
							height={160}
							className="mx-auto"
						/>
						<div className="w-24 h-1 bg-[#D4AF37] mx-auto my-8" />
						<p className="text-2xl md:text-3xl text-gray-600 mb-8">
							Coming Soon to Transform Your Real Estate Experience in Dubai
						</p>
						<div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8" />
					</div>
				</div>

				{/* Animated Arrow Button */}
				<button
					onClick={scrollToContact}
					className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30
						animate-bounce hover:animate-none
						bg-white/90 hover:bg-white rounded-full p-3
						shadow-lg hover:shadow-xl transition-all duration-300
						group"
				>
					<svg
						className="w-6 h-6 text-[#D4AF37] group-hover:text-[#B8860B] transition-colors duration-300"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
				</button>
			</section>

			{/* Contact Form Section */}
			<section id="contact-section" className="py-20 px-4 max-w-3xl mx-auto">
				<ContactForm />
			</section>
		</main>
	);
}
