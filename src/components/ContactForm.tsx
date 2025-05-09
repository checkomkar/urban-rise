"use client";

import { useState } from "react";

export default function ContactForm() {
	const [isLoading, setIsLoading] = useState(false);
	const [formStatus, setFormStatus] = useState<{
		type: "success" | "error" | null;
		message: string;
	}>({ type: null, message: "" });

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);
		setFormStatus({ type: null, message: "" });

		const formData = new FormData(e.currentTarget);
		const data = {
			firstName: formData.get("firstName"),
			lastName: formData.get("lastName"),
			email: formData.get("email"),
			phone: formData.get("phone"),
			country: formData.get("country"),
			message: formData.get("message"),
		};
		console.log(data);
		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			const result = await response.json();
			console.log(result);
			if (result.error || result.error !== null) {
				console.log("Failed to send message");
				throw new Error("Failed to send message");
			}

			setFormStatus({
				type: "success",
				message: "Message sent successfully! We'll get back to you soon.",
			});
		} catch (error) {
			console.log(error);
			setFormStatus({
				type: "error",
				message: "Failed to send message. Please try again later.",
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
			<h2 className="text-3xl font-bold text-center mb-8 text-[#0A192F]">
				Contact Us
			</h2>
			{formStatus.type && (
				<div
					className={`mb-6 p-4 rounded-lg ${
						formStatus.type === "success"
							? "bg-green-100 text-green-700"
							: "bg-red-100 text-red-700"
					}`}
				>
					{formStatus.message}
				</div>
			)}
			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label
							htmlFor="firstName"
							className="block text-sm font-medium text-[#0A192F] mb-2"
						>
							First Name
						</label>
						<input
							type="text"
							id="firstName"
							name="firstName"
							required
							className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-500 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
							placeholder="Enter your first name"
						/>
					</div>
					<div>
						<label
							htmlFor="lastName"
							className="block text-sm font-medium text-[#0A192F] mb-2"
						>
							Last Name
						</label>
						<input
							type="text"
							id="lastName"
							name="lastName"
							required
							className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-500 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
							placeholder="Enter your last name"
						/>
					</div>
				</div>
				<div>
					<label
						htmlFor="email"
						className="block text-sm font-medium text-[#0A192F] mb-2"
					>
						Email Address
					</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-500 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
						placeholder="Enter your email"
					/>
				</div>
				<div>
					<label
						htmlFor="phone"
						className="block text-sm font-medium text-[#0A192F] mb-2"
					>
						Phone Number
					</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						required
						className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-500 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
						placeholder="Enter your phone number"
					/>
				</div>
				<div>
					<label
						htmlFor="country"
						className="block text-sm font-medium text-[#0A192F] mb-2"
					>
						Country
					</label>
					<input
						type="text"
						id="country"
						name="country"
						required
						className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-500 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
						placeholder="Enter your country"
					/>
				</div>
				<div>
					<label
						htmlFor="message"
						className="block text-sm font-medium text-[#0A192F] mb-2"
					>
						Type of Property you are looking for?
					</label>
					<textarea
						id="message"
						name="message"
						required
						rows={4}
						className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-500 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
						placeholder="Type of Property you are looking for?"
					/>
				</div>
				<button
					type="submit"
					disabled={isLoading}
					className="w-full bg-[#ffda62] text-[#0A192F] py-3 px-6 rounded-lg font-semibold hover:bg-[#e8b921] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{isLoading ? "Sending..." : "Send Message"}
				</button>
			</form>
		</div>
	);
}
